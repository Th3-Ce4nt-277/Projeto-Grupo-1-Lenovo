import React from "react"
import { NavBar } from './NavBar.jsx';

export const Header = () => {
    return (
        <header>
            <div class="header-divisor">
                <a class='logolink' href="https://www.lenovo.com/br/pt/?Redirect=False">
                    <img src="https://p3-ofp.static.pub/fes/cms/2023/03/22/8hjmcte754uauw07ypikjkjtx0m5ib450914.svg" alt="Lenovo" />
                </a>
                <input type="text" id="search-bar" placeholder="Procurar"/>
                <ul class="header-btn-actions">
                    <li>
                        <button >
                            <i class="fi fi-rr-user"></i>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i class="fi fi-rr-heart"></i>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i class="fi fi-rr-shopping-cart"></i>
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
Promoções*/