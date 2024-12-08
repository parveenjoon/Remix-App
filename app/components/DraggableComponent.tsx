import React from 'react';
import { useDrag } from 'react-dnd';

// Define a draggable component
const DraggableComponent: React.FC = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ITEM', // Defines the type of item being dragged
    collect: (monitor) => ({
      isDragging: monitor.isDragging(), // Collect the dragging state
    }),
  }));

  return (
    <div
      ref={drag} // Attach the drag ref to the div
      style={{
        width: '200px',
        height: '100px',
        backgroundColor: isDragging ? 'lightgray' : 'lightblue', // Change color when dragging
        margin: '10px',
        textAlign: 'center',
        lineHeight: '100px',
        borderRadius: '8px',
        cursor: 'move',
        opacity: isDragging ? 0.5 : 1, // Change opacity while dragging
      }}
    >
      Drag Me!
    </div>
  );
}

export default DraggableComponent;
