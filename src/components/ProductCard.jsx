import "../styles/ProductCard.css"

const ProductCard = ({product, categories}) => {
    var features = [];
    for (var prop in product.features) {
        features.push(product.features[prop]);
    }
    
   return (
        <div className="product-card">
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
                {features.splice(2).map((feature) => (<p style={{marginTop: "10px"}}>{feature}</p>))}
            </div>
            <button id="addToCart">Adicionar ao carrinho</button>
        </div>
    )
}

export default ProductCard;