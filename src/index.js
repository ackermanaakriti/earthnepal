import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LayoutProvider } from './Context/LayoutContext';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
      <BrowserRouter>
      <LayoutProvider>
      <App />
    </LayoutProvider>
    </BrowserRouter>
   
  </React.StrictMode>
);

