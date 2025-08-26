function Cart() {
  return (
    <main className="cart">
      <div className="cartItems">
        <header className="header">
          <h2>Seu Carrinho</h2>
          <h2>Produtos: 0</h2>
        </header>
      </div>
      <div className="cartOrder">
        <h2>Resumo do Pedido</h2>
        <section style={{ flexDirection: "column"}}>
          <h3>Possui cupom de desconto?</h3>
          <input type="text" className="txtPromo" placeholder="Digite seu cupom aqui" />
        </section>
        <section>
          <h3>Envio</h3>
          <h3>R$ 70</h3>
        </section>
        <section>
          <h3>Subtotal do produto</h3>
          <h3>R$ 4930</h3>
        </section>
        <section>
          <h3>Total</h3>
          <h3>R$ 5000</h3>
        </section>
        <button className="btnBuy">
          Finalizar Compra
        </button>
      </div>
    </main>
  );
}

export default Cart;