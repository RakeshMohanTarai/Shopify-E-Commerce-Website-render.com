import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext';
import { AuthProvider } from './AuthContext';

const root = createRoot(document.getElementById('root')); // Use createRoot from react-dom/client
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
