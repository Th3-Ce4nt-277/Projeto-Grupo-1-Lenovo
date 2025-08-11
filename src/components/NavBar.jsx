import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    
    <nav className="mainNavbar">
      <ul>
        <li>
          <Link to="/produtos">Produtos</Link>
        </li>
        <li>
          <Link to="/solucoes">Soluções</Link>
        </li>
        <li>
          <Link to="/servicos">Serviços</Link>
        </li>
        <li>
          <Link to="/suporte">Suporte</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/gaming">Gaming</Link>
        </li>
        {}
        <li>
          <Link to="/carrinho">Testar Carrinho</Link>
        </li>
      </ul>
    </nav>
  );
};