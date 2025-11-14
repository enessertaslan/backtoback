
import React, { useCallback, useState } from 'react';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  isLoading: boolean;
}

const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-500 mb-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
    </svg>
);


const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, isLoading }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageUpload(e.target.files[0]);
    }
  };

  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onImageUpload(e.dataTransfer.files[0]);
    }
  }, [onImageUpload]);

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center p-8 text-center bg-gray-800/50 border-2 border-dashed border-gray-600 rounded-xl transition-all duration-300">
        <h2 className="text-xl font-semibold text-gray-300 mb-4">Get Started</h2>
        <p className="text-gray-400 mb-8 max-w-md">Upload an image to begin your creative journey. Transform photos into different eras or apply your own unique edits.</p>
        <div
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            className={`relative w-full p-10 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-200 ${isDragging ? 'border-cyan-400 bg-gray-700/50' : 'border-gray-500 hover:border-cyan-500'}`}
        >
            <input
            type="file"
            id="file-upload"
            accept="image/png, image/jpeg, image/webp"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={isLoading}
            />
            <label htmlFor="file-upload" className="flex flex-col items-center justify-center">
                <UploadIcon />
                <p className="text-lg font-medium text-gray-300">
                    <span className="text-cyan-400">Click to upload</span> or drag and drop
                </p>
                <p className="text-sm text-gray-500 mt-1">PNG, JPG, or WEBP</p>
            </label>
        </div>
    </div>
  );
};

export default ImageUpload;
