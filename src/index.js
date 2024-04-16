import React from 'react';
import { createRoot } from 'react-dom';
import App from './components/app/App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
