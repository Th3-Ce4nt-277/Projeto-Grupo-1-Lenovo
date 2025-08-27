import React from "react"
import { NavBar } from './NavBar.jsx';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="main">
            <div className="header-divisor">
                <i class="fi fi-rr-menu-burger" id="menuBurguer"></i>
                <Link to="/">
                    <img src="https://p3-ofp.static.pub/fes/cms/2023/03/22/8hjmcte754uauw07ypikjkjtx0m5ib450914.svg" alt="Lenovo" />
                </Link>
                <i class="fi fi-rr-menu-burger" id="menuBurguer"></i>
                <input type="text" id="search-bar" placeholder="Procurar"/>
                <ul className="header-btn-actions">
                    <li>
                        <button >
                            <Link to="/account">
                            <i className="fi fi-rr-user"></i>
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i className="fi fi-rr-heart"></i>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to="/cart">
                                <i className="fi fi-rr-shopping-cart"></i>
                            </Link>
                        </button>
                    </li>
                </ul>
            </div>
            <NavBar/>
        </header>
    )
}

/*Produtos
Soluções
Serviços
Suporte
Sobre Lenovo
Promoções
*/