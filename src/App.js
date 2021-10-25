import React from 'react';
import { EditorProvider } from './context/context';
import './App.css';

import CodeBar from './components/CodeBar/CodeBar';

function App() {
  return (
    <EditorProvider>
      <CodeBar />
    </EditorProvider>
  );
}

export default App;
