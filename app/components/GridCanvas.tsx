import React from 'react';
import { useDrop } from 'react-dnd';

type DraggableItem = {
  type: 'Progress Bar' | 'Question Text' | 'Timer';
};

const GridCanvas = () => {
  const [{ isOver }, drop] = useDrop<DraggableItem, void, { isOver: boolean }>(() => ({
    accept: ['Progress Bar', 'Question Text', 'Timer'], // Acceptable draggable types
    drop: (item) => {
      console.log(`Dropped: ${item.type}`); // Handle drop event
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(), // Determine if an item is being hovered over
    }),
  }));

  return (
    <div
      ref={drop}
      className={`grid grid-cols-4 gap-2 w-full h-screen bg-gray-100 ${
        isOver ? 'bg-green-200' : ''
      }`}
    >
      {Array.from({ length: 16 }).map((_, index) => (
        <div
          key={index}
          className="border border-gray-300 bg-white rounded-md shadow-md"
        ></div>
      ))}
    </div>
  );
};

export default GridCanvas;
