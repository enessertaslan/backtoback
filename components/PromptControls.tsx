
import React, { useState } from 'react';
import { ERAS } from '../constants';
import Loader from './Loader';

interface PromptControlsProps {
  onGenerate: (prompt: string, selectedEra: string) => void;
  isLoading: boolean;
}

const WandIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.47 2.118L2.25 12.87a2.25 2.25 0 0 1 2.118-2.47m5.162 5.724a3 3 0 0 0 5.78 1.128 2.25 2.25 0 0 1 2.47 2.118l-1.154 1.86a2.25 2.25 0 0 1-2.118 2.47m-5.162-5.724-1.154 1.86a2.25 2.25 0 0 1-2.118 2.47m12.646-7.828c.118-.058.237-.115.355-.172a3 3 0 0 0-5.78-1.128 2.25 2.25 0 0 1-2.47-2.118L12.25 4.5l-1.154 1.86a2.25 2.25 0 0 1-2.118 2.47m5.162 5.724a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.47 2.118l1.154-1.86a2.25 2.25 0 0 1 2.118-2.47m0 0a3 3 0 0 0 5.78-1.128 2.25 2.25 0 0 1 2.47-2.118l-1.154-1.86a2.25 2.25 0 0 1-2.118-2.47m-5.162 5.724.118-.058.237-.115.355-.172m-8.946 8.44c-.118.058-.237.115-.355.172a3 3 0 0 0 5.78 1.128 2.25 2.25 0 0 1 2.47 2.118l1.154-1.86a2.25 2.25 0 0 1 2.118-2.47m-5.162 5.724-.118.058-.237.115-.355.172M6 12.75a3 3 0 0 0-5.78-1.128 2.25 2.25 0 0 1-2.47-2.118L2.25 7.63a2.25 2.25 0 0 1 2.118-2.47m5.162 5.724a3 3 0 0 0 5.78-1.128 2.25 2.25 0 0 1 2.47-2.118l-1.154-1.86a2.25 2.25 0 0 1-2.118-2.47m-5.162 5.724-1.154-1.86a2.25 2.25 0 0 1-2.118-2.47" />
    </svg>
);


const PromptControls: React.FC<PromptControlsProps> = ({ onGenerate, isLoading }) => {
  const [prompt, setPrompt] = useState('');
  const [selectedEra, setSelectedEra] = useState('none');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(prompt, selectedEra);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Or describe a custom edit... e.g., 'add a retro filter', 'remove the person in the background'"
          className="flex-grow bg-gray-800 border border-gray-600 rounded-lg p-3 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 resize-none"
          rows={2}
          disabled={isLoading}
        />
        <select
          value={selectedEra}
          onChange={(e) => setSelectedEra(e.target.value)}
          className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-3 text-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 appearance-none sm:w-60"
          disabled={isLoading}
        >
          {ERAS.map((era) => (
            <option key={era.value} value={era.value}>{era.label}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 disabled:bg-gray-600 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transition-colors duration-200"
      >
        {isLoading ? (
          <>
            <Loader />
            Generating...
          </>
        ) : (
          <>
            <WandIcon />
            Generate Image
          </>
        )}
      </button>
    </form>
  );
};

export default PromptControls;
