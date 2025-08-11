// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Importamos o nosso Provedor
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* "Abraçamos" o App com o CartProvider */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);