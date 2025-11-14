
import React, { useState, useCallback } from 'react';
import { UploadedImage } from './types';
import { fileToBase64 } from './utils/fileUtils';
import { editImageWithGemini } from './services/geminiService';
import Header from './components/Header';
import ImageUpload from './components/ImageUpload';
import PromptControls from './components/PromptControls';
import ImageDisplay from './components/ImageDisplay';
import ErrorMessage from './components/ErrorMessage';
import { ERAS } from './constants';

const App: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<UploadedImage | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = useCallback(async (file: File) => {
    setIsLoading(true);
    setError(null);
    setEditedImage(null);
    try {
      const base64 = await fileToBase64(file);
      setOriginalImage({ file, base64 });
    } catch (err) {
      setError('Failed to load image. Please try another file.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleGenerate = useCallback(async (prompt: string, selectedEra: string) => {
    if (!originalImage) {
      setError('Please upload an image first.');
      return;
    }

    let finalPrompt = prompt.trim();
    if (!finalPrompt && selectedEra !== 'none') {
        const era = ERAS.find(e => e.value === selectedEra);
        finalPrompt = era?.prompt || `Transform this image with a ${era?.label} style.`;
    }

    if (!finalPrompt) {
        setError('Please enter a prompt or select an era.');
        return;
    }

    setIsLoading(true);
    setError(null);
    setEditedImage(null);

    try {
      const resultBase64 = await editImageWithGemini(originalImage.base64, finalPrompt);
      setEditedImage(`data:image/jpeg;base64,${resultBase64}`);
    } catch (err) {
      console.error(err);
      const errorMessage = (err instanceof Error) ? err.message : 'An unknown error occurred.';
      setError(`Failed to generate image: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, [originalImage]);
  
  const resetState = () => {
    setOriginalImage(null);
    setEditedImage(null);
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl mx-auto">
        <Header onReset={resetState} hasImage={!!originalImage}/>
        <main className="mt-8">
          {error && <ErrorMessage message={error} onDismiss={() => setError(null)} />}
          
          {!originalImage ? (
            <ImageUpload onImageUpload={handleImageUpload} isLoading={isLoading} />
          ) : (
            <div className="flex flex-col gap-8">
              <ImageDisplay originalImage={originalImage.base64} editedImage={editedImage} isLoading={isLoading} />
              <div className="w-full sticky bottom-0 bg-gray-900/80 backdrop-blur-sm py-4 z-10">
                 <PromptControls onGenerate={handleGenerate} isLoading={isLoading} />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
