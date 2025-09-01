import "../styles/cart.css"
import CartItem from "../components/CartItem.jsx"

const Cart = ({products, loggedUser, userCart, updateCartItems}) => {

	var allProductsPrice = []
  var productQuantity = []
  for (let a of userCart[loggedUser[0].id].items) {
    allProductsPrice.push(products[a.product_id].price)
    productQuantity.push(a.quantity)
  }

  const totalProductsPrice = allProductsPrice.map((value, index) => {
  return value * productQuantity[index];
});

  const TotalPrice = totalProductsPrice.reduce((total, actual) => {
    return total + actual;
  }, 0);
  
  

  const totalProducts = userCart[loggedUser[0].id].items.reduce((total, actual) => {
    return total + actual.quantity;
  }, 0);

  return (
    <main className="cart">
      <div className="cartHeader">
        <h2>Seu Carrinho</h2> <h3>{totalProducts === 0 ? 'Sem Produtos' : totalProducts === 1 ?`${totalProducts} Produto` : `${totalProducts} Produtos` }</h3>
      </div>
      <div className="cardContainer">
        <div className="itemContainer">
          {userCart[loggedUser[0].id].items.map((item) => (<CartItem itemRender={item} products={products} loggedUser={loggedUser} userCart={userCart} updateCartItems={updateCartItems}/>))}
        </div>
        <form action="" className="completePurchase">
          <h2 style={{textAlign: "center"}}>Finalizar Compra</h2>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
            <h2>Envio</h2>
            <h3>R$ 0</h3>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
            <h2>Total</h2>
            <h3>R$ {TotalPrice}</h3>
          </div>
          <button type="submit" onClick={(e) => {e.preventDefault()}} className="purchase">Continuar</button>
        </form>
      </div>
    </main>
  );
}

export default Cart;