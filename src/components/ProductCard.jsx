import { Link, useNavigate } from "react-router-dom";
import "../styles/ProductCard.css"

const ProductCard = ({product, categories, loggedUser, userCart, updateCartItems}) => {
    var features = [];
    for (var prop in product.features) {
        features.push(product.features[prop]);
    }

    var toUpdate = []
    
    
    const addToCart = (productID) => {
        toUpdate = []
        for (let p of userCart[loggedUser[0].id].items) {
            toUpdate.push(p)
            
        }
        const exist = toUpdate.find((item) => item.product_id === productID)
        if (!exist) {
            toUpdate.push({
                "product_id": `${productID}`,
                "quantity": 1
            })
        } else {
            console.log(
                toUpdate.find((item) => item.product_id === productID).quantity = toUpdate.find((item) => item.product_id === productID).quantity + 1
            );
        }

        
        console.log(toUpdate);
        
        fetch('http://localhost:3500/carts/' + loggedUser[0].id, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            id: "0",
            client_id: "",
            items: toUpdate
            })
        })
        
        setTimeout(() => {
            updateCartItems()
        }, 200);
    }

    const navigate = useNavigate()
    
    function openCart() {
        navigate('/cart')
    }

    
   return (
        <Link to={`/products/details/${product.name.replace(/ /g, '-')}&id=${product.id}`} className="product-card">
            <div className="img-container">
                <img src={product.images[0]} alt={product.name} />
            </div>
            <div>
                <h3>{product.name}</h3>
                <div className="product-info">
                    <p>R$ {product.price}</p>
                    <span className="categoryPill">{categories[product.category].name}</span>
                </div>
                <h4>características</h4>
                {features.splice(0, 3
                    
                ).map((feature) => (<p style={{marginTop: "10px"}}>{feature}</p>))}
            </div>
            <button id="addToCart" onClick={(e) => {e.preventDefault(); addToCart(product.id); openCart()}}>Adicionar ao carrinho</button>
        </Link>
    )
}

export default ProductCard;