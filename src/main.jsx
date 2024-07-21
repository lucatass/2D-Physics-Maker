import React from 'react';
import ReactDOM from 'react-dom/client';
import Settings from './components/Settings';
import Canvas from './components/Canvas';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container">
      <Settings />
      <Canvas />
    </div>
  </React.StrictMode>,
);
