
import React from 'react';
import Loader from './Loader';

interface ImageDisplayProps {
  originalImage: string;
  editedImage: string | null;
  isLoading: boolean;
}

const ImagePanel: React.FC<{ title: string; imageUrl?: string | null; isLoading?: boolean; children?: React.ReactNode }> = ({ title, imageUrl, isLoading, children }) => (
  <div className="w-full bg-gray-800/50 rounded-xl overflow-hidden shadow-lg flex flex-col">
    <div className="px-4 py-2 bg-gray-700/50">
      <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">{title}</h3>
    </div>
    <div className="aspect-square w-full flex items-center justify-center p-2">
      {isLoading ? (
        <div className="flex flex-col items-center text-gray-400">
            <Loader />
            <span className="mt-2 text-sm">AI is thinking...</span>
        </div>
      ) : imageUrl ? (
        <img src={imageUrl} alt={title} className="object-contain max-w-full max-h-full rounded-md" />
      ) : (
        children
      )}
    </div>
  </div>
);

const ImageDisplay: React.FC<ImageDisplayProps> = ({ originalImage, editedImage, isLoading }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      <ImagePanel title="Original" imageUrl={originalImage} />
      <ImagePanel title="Edited" imageUrl={editedImage} isLoading={isLoading}>
        <div className="text-center text-gray-500">
          <p>Your AI-generated image will appear here.</p>
        </div>
      </ImagePanel>
    </div>
  );
};

export default ImageDisplay;
