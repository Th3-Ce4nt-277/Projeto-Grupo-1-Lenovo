const ProductCard = ({product}) => {
    
    
    return (
        <button className="product-card">
            <img src={product.imagens[0].url} alt={product.nome} width="200" />
            <h3>{product.nome}</h3>
            <p>R$ {product.preco}</p>
            <span className="categoryPill">Laptop</span>
            <button className="addToCart">
                <i className="fi fi-rr-shopping-cart"></i>
                Adicionar ao Carrinho
            </button>
        </button>
    )
}

export default ProductCard;