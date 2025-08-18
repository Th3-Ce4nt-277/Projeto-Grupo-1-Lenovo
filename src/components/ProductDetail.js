import React from 'react';
import products from '../api/products.json';
import './styles/ProductDetail.css';

// Recebe o ID do produto a ser mostrado e uma função para voltar à lista.
const ProductDetail = ({ productId, onBackToList }) => {
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Produto não encontrado!</div>;
  }

  return (
    <div className="product-detail-container">
      <button onClick={onBackToList} className="back-button">
        &larr; Voltar para a lista
      </button>
      <div className="detail-content">
        <div className="detail-gallery">
          <img src={product.image} alt={product.name} className="main-image"/>
        </div>
        <div className="detail-specs">
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-price">{product.price}</p>
          <div className="specs-table">
            {Object.entries(product.details).map(([key, value]) => (
              <div className="spec-row" key={key}>
                <strong className="spec-key">{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                <span className="spec-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
