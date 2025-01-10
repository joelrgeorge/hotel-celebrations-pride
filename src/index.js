import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for createRoot
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot correctly
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);