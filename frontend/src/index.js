import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/Workoutscontext.js';
import { AuthContextProvider } from './context/Authcontext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <AuthContextProvider>
      <WorkoutsContextProvider>
    <App />
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);