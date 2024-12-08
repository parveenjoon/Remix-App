import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

const AdminDrawer: React.FC = () => {
  // Use state to toggle the drawer visibility
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Drag hook to make the AdminDrawer draggable
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'DRAWER',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      ref={drag} // Drag the AdminDrawer by attaching the drag ref
      style={{
        position: 'fixed',
        top: '0',
        left: isOpen ? '0' : '-250px', // Toggle position for opening and closing the drawer
        width: '250px',
        height: '100%',
        backgroundColor: '#333',
        color: 'white',
        transition: 'left 0.3s ease',
        zIndex: 999,
        padding: '20px',
        boxSizing: 'border-box',
        opacity: isDragging ? 0.5 : 1, // Change opacity while dragging
      }}
    >
      <button onClick={toggleDrawer} style={{ marginBottom: '20px' }}>
        {isOpen ? 'Close Drawer' : 'Open Drawer'}
      </button>
      <h2>Admin Dashboard</h2>
      <ul>
        <li>Dashboard</li>
        <li>User Management</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default AdminDrawer;
