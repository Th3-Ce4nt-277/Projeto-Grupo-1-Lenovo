import React from "react"
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="mainNavbar">
            <ul>
                <li>
                    <Link to="/products">Produtos</Link>
                </li>
                <li>
                    <Link to="/solucoes">Soluções</Link>
                </li>
                <li>
                    <Link to="/">Serviços</Link>
                </li>
                <li>
                    <Link to="/">Suporte</Link>
                </li>
                <li>
                    <Link to="/">Sobre Nos</Link>
                </li>
                <li>
                    <Link to="/">Promoções</Link>
                </li>            
            </ul>
            <ul>
                <li>
                    <Link to="/">Empresas</Link>
                </li>
                <li>
                    <Link to="/">Educaçao</Link>
                </li>
                <li>
                    <Link to="/">Gaming</Link>
                </li>         
            </ul>
        </nav>
    )
}
