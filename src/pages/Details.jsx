import React from 'react';
import ProductCard from '../components/ProductCard.jsx';

import '../styles/details.css'
import { useNavigate } from 'react-router-dom';

const Details = ({products, categories, loggedUser, userCart, updateCartItems}) => {

    const productID = window.location.href.match(/&id=(\d+)/);
   
    var features = []
    var fIcon = []
    const selectedProduct = products.find((item) => item.id === productID[1])

    /*const selectedProduct =
		{
			"id": "0",
			"name": "Lenovo Legion Pro 7i Gen 8",
			"price": 15000,
			"category": 0,
			"images": [
				"https://m.media-amazon.com/images/I/61NqDJ3heFL._UF894,1000_QL80_.jpg",
				"https://i.imgur.com/G35LwXg.jpeg",
				"https://i.imgur.com/H1zQxP3.jpeg"
			],
			"features": {
				"processor": "Intel Core i9-13900HX",
				"ram": "32GB DDR5 5600MHz",
				"gpu": "NVIDIA GeForce RTX 4080 12GB",
				"storage": "1TB PCIe Gen4 SSD",
				"display": "16\" WQXGA (2560 x 1600) IPS, 240Hz, 500 nits",
				"battery": "99.9 Wh",
				"ports": "1x USB-C (Thunderbolt 4), 3x USB-A 3.2, HDMI 2.1, Ethernet (RJ45), 3.5mm audio jack"
			}
		}*/

    for (var prop in selectedProduct.features) {
        features.push(selectedProduct.features[prop]);
        fIcon.push(prop)
       
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
    
    const icons = {
        processor: "microchip",
        ram: "memory",
        gpu: "camera",
        camera_rear: "camera-viewfinder",
        camera_front: "face-viewfinder",
        storage: "hdd",
        display: "screen",
        battery: "battery-empty",
        ports: "plug",
        os: "laptop-binary",
        response_time: "time-quarter-to",
        refresh_rate: "pending",
        features: "microchip-ai"
    }

    var filtredProducts = products.filter((p) => p.category == selectedProduct.category)
    console.log(filtredProducts);

    
    const navigate = useNavigate()
    
    function openCart() {
        navigate('/cart')
    }
    
    
    return (
        <main className="details">
            <div className="details-container">
                <div className="imgsContainer">
                    <img src={selectedProduct.images[0]} alt="" />
                </div>
                    <div className="imgRow">
                        <div><i className="fi fi-rr-picture"></i></div>
                        <div><i className="fi fi-rr-picture"></i></div>
                    </div>
                <div className="detailsInfo">
                    <h1>{selectedProduct.name}</h1>
                    <div className='priceContainer'>
                        <h2>R$ {selectedProduct.price}</h2>
                    </div>
                    {features.map((feature, index) => (<span style={{marginTop: "15px", display: "flex", alignItems: "center", gap: "15px"}}> <i style={{fontSize : "22px"}} className={`"fi fi-rr-${icons[fIcon[index]]}`}></i> {feature}</span>))}
                    <button className="addToCart" onClick={(e) => {e.preventDefault(); addToCart(selectedProduct.id); openCart()
                    }}>
                        <i className="fi fi-rr-shopping-cart"></i>
                        Adicionar ao carrinho
                    </button>
                </div>
            </div>
                <h1 style={{margin: "20px"}}>Produtos relacionados</h1>
            <div className="otherProducts">
                {filtredProducts.map((product) => (<ProductCard product={product} categories={categories} loggedUser={loggedUser} userCart={userCart} updateCartItems={updateCartItems}/>))}
            </div>
        </main>
    )
}

export default Details;

/*


            <div className="otherProducts">
                <h1>Produtos relacionados</h1>
            </div>

*/