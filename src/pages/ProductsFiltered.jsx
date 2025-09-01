import ProductCard from '../components/ProductCard.jsx';
import React from 'react';


const ProductsFiltered = ({categories, loggedUser, userCart, updateCartItems}) => {
  const [products, setProducts] = React.useState([]);
  var catID

  
  
  const getProducts = async () => {
    catID = window.location.href.match(/&cat=(\d+)/)[1]; 
		const response = await fetch('http://localhost:3500/products?category=' + catID);
		const data = await response.json();
		
		setProducts(data);
	}
  
  React.useEffect(() => {
      getProducts()
  }, []);
  
  return (
    <div>
      <img src="//p1-ofp.static.pub/ShareResource/na/homepage/heros/lenovo-thinkbook-13x.jpg" alt='' style={{width: "100%"}} />
      <div className="productContainer">
        {products.map((product) => (<ProductCard product={product} categories={categories} loggedUser={loggedUser} userCart={userCart} updateCartItems={updateCartItems}/>))}
      </div>
    </div>
  );
};


export default ProductsFiltered;

