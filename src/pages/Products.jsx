import ProductCard from '../components/ProductCard.jsx';
import CategoriesButton from '../components/CategoriesButton.jsx';

const Products = ({products, categories, loggedUser, userCart, updateCartItems}) => {  
  
  return (
    <div>
      <img src="//p1-ofp.static.pub/ShareResource/na/homepage/heros/lenovo-thinkbook-13x.jpg" alt='' style={{width: "100%"}} />
      
      <div style={{boxShadow: "0 0 10px #000000b0", margin: "-4px 0"}}>
        <h1 style={{padding: "30px 0px 0px 30px", fontSize: "19px"}}>Explore os Produtos Lenovo</h1>
        <div className='categoriesContainer'>
          {categories.map((category) => (<CategoriesButton category={category} />))}
        </div>
      </div>

      <div className="productContainer">
        {products.map((product) => (<ProductCard product={product} categories={categories} loggedUser={loggedUser} userCart={userCart} updateCartItems={updateCartItems}/>))}
      </div>
    </div>
  );
};


export default Products;

