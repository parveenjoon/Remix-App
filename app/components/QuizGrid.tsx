import React from 'react';

const QuizGrid = ({ quizData }: { quizData: any[] }) => {
  return (
    <div className="grid grid-cols-4 gap-2 w-full h-screen bg-gray-100">
      {quizData.map((item, index) => (
        <div key={index} className="p-2 border border-gray-300 bg-white">
          {item.type === 'Question Text' ? (
            <p>{item.content}</p>
          ) : item.type === 'Progress Bar' ? (
            <progress value="50" max="100"></progress>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default QuizGrid;
