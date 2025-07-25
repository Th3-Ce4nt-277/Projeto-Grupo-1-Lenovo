import React from "react";
import "./header.css";
function header() {
  return (
    <header className="app-header">
      <h1>Catálogo Lenovo</h1>

      <nav>
        <a href="/">Início</a>
        <a href="/add-product">Adicionar Produto</a>
      </nav>
    </header>
  );
}

export default header;
