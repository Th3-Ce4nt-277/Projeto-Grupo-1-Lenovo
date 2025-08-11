import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { Header } from './components/Header.jsx';
import { NavBar } from './components/NavBar.jsx';
import CartPage from './pages/CartPage.js';

function HomePage() {
  return <h1 style={{ textAlign: 'center', padding: '2rem' }}>Bem-vindo à Lenovo!</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/carrinho" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
