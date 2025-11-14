
import React from 'react';

interface HeaderProps {
    onReset: () => void;
    hasImage: boolean;
}

const ImageEditAutoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-cyan-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
);


const Header: React.FC<HeaderProps> = ({ onReset, hasImage }) => {
  return (
    <header className="flex justify-between items-center pb-4 border-b border-gray-700">
      <div className="flex items-center gap-4">
        <ImageEditAutoIcon />
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          AI Image Era Shifter
        </h1>
      </div>
      {hasImage && (
         <button 
            onClick={onReset} 
            className="px-4 py-2 text-sm font-medium text-cyan-300 bg-gray-800/50 border border-gray-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors duration-200"
         >
           Start Over
         </button>
      )}
    </header>
  );
};

export default Header;
