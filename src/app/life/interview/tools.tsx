import React from 'react';

export const QuestionBlock: React.FC<{ question: string }> = ({ question }) => {
  return (
    <div className="bg-gray-100 p-4 font-semibold mt-6 rounded-lg">
      {question}
    </div>
  );
};
