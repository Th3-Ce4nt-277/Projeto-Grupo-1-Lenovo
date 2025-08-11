import React from 'react';
import { useCart } from '../context/CartContext';

function CartPage() {
  const { cartItems, addItemToCart, removeItemFromCart } = useCart();

  const handleAddTestItem = () => {
    const testProduct = {
      id: Math.random(),
      name: `Produto de Teste ${new Date().toLocaleTimeString()}`,
      price: 199.99,
    };
    addItemToCart(testProduct);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Página do Meu Carrinho</h2>
      <hr />

      <button onClick={handleAddTestItem} style={{ marginBottom: '20px' }}>
        Adicionar Item de Teste
      </button>

      <h3>Itens no Carrinho:</h3>

      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px',
              }}
            >
              <h4>{item.name}</h4>
              <p>Preço: R$ {item.price}</p>
              <button onClick={() => removeItemFromCart(item.id)}>
                Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;