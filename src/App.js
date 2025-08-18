
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  // Usamos o estado para saber qual produto está selecionado.
  // Se for null, mostramos a lista. Se tiver um ID, mostramos os detalhes.
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductSelect = (id) => {
    setSelectedProductId(id);
  };

  const handleBackToList = () => {
    setSelectedProductId(null);
  };

  return (
    <div className="App">
      <header className="app-header">
        {/* Aqui você poderia colocar um logo ou uma barra de navegação */}
        <h2>Lenovo Clone</h2>
      </header>
      <main>
        {selectedProductId ? (
          // Se houver um produto selecionado, mostra a visão de detalhes
          <ProductDetail
            productId={selectedProductId}
            onBackToList={handleBackToList}
          />
        ) : (
          // Senão, mostra a lista de produtos
          <ProductList onProductSelect={handleProductSelect} />
        )}
      </main>
    </div>
  );
}

export default App;
