import {Link} from "react-router-dom"
import "../styles/Footer.css"

const Footer = () => {
    return (
        <footer>
            <h4>Muito obrigado pela oportunidade</h4>

            <div>
                <Link to="https://totidiversidade.com.br">
                    <img src="https://totidiversidade.com.br/wp-content/uploads/2025/07/Toti_logo.png" alt="Toti Logo" />
                </Link>
                <Link to="https://www.lenovo.com/br/pt/?Redirect=False">
                    <img src="https://p3-ofp.static.pub/fes/cms/2023/03/22/8hjmcte754uauw07ypikjkjtx0m5ib450914.svg" alt="Lenovo Logo" />
                </Link>
                <Link to="https://www.voke.shop/home">
                    <img src="https://www.voke.shop/on/demandware.static/Sites-Voke-Site/-/default/dwf3e412cb/images/voke-logo-255.png" alt="Voke Logo"/>
                </Link>
            </div>
            
            <p>Este site não é um site oficial da Lenovo Tecnologia Brasil Ltda.</p>
        </footer>
    )
}

export default Footer