'use client'

import React from 'react';
import { QuestionStatus } from './AppContext';

interface QuestionProps {
  question: string;
  status: QuestionStatus;
  updateStatus: (status: Partial<QuestionStatus>) => void;
}

const Question: React.FC<QuestionProps> = ({ question, status, updateStatus }) => {
    const safeStatus = {
        completed: status.completed ?? false,
        needsRevision: status.needsRevision ?? false,
      };
      

  const handleReviseClick = () => {
    updateStatus({ needsRevision: !safeStatus.needsRevision });
  };

  const handleCompletedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateStatus({ completed: e.target.checked });
  };

  return (
    <div className="flex items-center space-x-4 py-2 ">
      <input
        type="checkbox"
        checked={safeStatus.completed}
        onChange={handleCompletedChange}
        className="form-checkbox h-5 w-5 text-blue-600 rounded"
      />
      <a
        // href={`https://www.google.com/search?q=${encodeURIComponent(question)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex-grow hover:text-blue-600 ${safeStatus.completed ? 'line-through text-white' : 'text-white'}`}
      >
        {question}
      </a>
      <button
        onClick={handleReviseClick}
        className={`px-2 py-1 rounded text-sm ${
          safeStatus.needsRevision ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
        } transition-colors duration-200`}
      >
        {safeStatus.needsRevision ? 'Revising' : 'Revise'}
      </button>
    </div>
  );
};

export default Question;

