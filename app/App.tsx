import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AdminDrawer from './components/AdminDrawer';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <AdminDrawer />
        {/* Your other components here */}
      </div>
    </DndProvider>
  );
}

export default App;
