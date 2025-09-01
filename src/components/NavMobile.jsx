import "../styles/NavMobile.css"
import { Link } from "react-router-dom";

const NavMobile = ({pos, onCloseNav}) => {    
    return (
        <div className="NavMobile" style={{left: `${pos}`}}>
            <div style={{display: "flex", gap: "10px"}}>
                <i className="fi fi-rr-menu-burger" onClick={onCloseNav}></i>
                <h1>Menu</h1>
            </div>
            <hr style={{margin: '20px 0'}}/>
            <ul>
                <Link to="/cart" onClick={onCloseNav}>
                    <li>
                    Carrinho
                    </li>
                </Link>
                <Link to="/products" onClick={onCloseNav}>
                    <li>
                    Produtos
                    </li>
                </Link>
                <Link to="/solucoes" onClick={onCloseNav}>
                    <li>
                    Soluções
                    </li>
                </Link>
                <li>
                    <Link to="/" onClick={onCloseNav}>Serviços</Link>
                </li>
                <li>
                    <Link to="/" onClick={onCloseNav}>Suporte</Link>
                </li>
                <li>
                    <Link to="/" onClick={onCloseNav}>Sobre Nos</Link>
                </li>
                <li>
                    <Link to="/" onClick={onCloseNav}>Promoções</Link>
                </li>            
            </ul>
        </div>
    );
}

export default NavMobile