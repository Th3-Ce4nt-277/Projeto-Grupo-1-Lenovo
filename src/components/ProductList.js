import React from 'react';
import ProductCard from './ProductCard';
import products from '../api/products.json'; // Importamos os dados diretamente
import './styles/ProductList.css';

// A prop "onProductSelect" é uma função para comunicar ao pai qual produto foi selecionado.
const ProductList = ({ onProductSelect }) => {
  return (
    <div className="product-list-container">
      <h1 className="list-title">Nossos Notebooks</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => onProductSelect(product.id)}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductList;