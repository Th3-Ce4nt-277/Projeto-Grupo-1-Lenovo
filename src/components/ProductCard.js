import React from 'react';
import './styles/ProductCard.css';

// A prop "onClick" permitirá que o componente pai saiba quando este card foi clicado.
const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <ul className="product-specs">
          <li>{product.details.processor}</li>
          <li>{product.details.memory}</li>
          <li>{product.details.storage}</li>
        </ul>
        <button className="details-button">Ver Detalhes</button>
      </div>
    </div>
  );
};

export default ProductCard;