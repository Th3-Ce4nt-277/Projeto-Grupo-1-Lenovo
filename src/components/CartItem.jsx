import "../styles/cartItem.css"
import { Link } from "react-router-dom"
import React from "react"

const CartItem = ({itemRender, products, loggedUser, userCart, updateCartItems}) => {

	console.log(itemRender);
	const item = products.find((p) => p.id === itemRender.product_id)

	
	var toUpdate = []

	const setItemQuantity = (productID, quantity) => {
        toUpdate = []
        for (let p of userCart[loggedUser[0].id].items) {
            toUpdate.push(p)
            
        }

		toUpdate.find((item) => item.product_id === productID).quantity = quantity

        
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

    const removeFromCart = (productID) => {
        toUpdate = []
        for (let p of userCart[loggedUser[0].id].items) {
            toUpdate.push(p)
        }

		const removed = toUpdate.filter((p) => p.product_id !== productID)
        
        console.log(toUpdate);
        
        fetch('http://localhost:3500/carts/' + loggedUser[0].id, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            id: "0",
            client_id: "",
            items: removed
            })
        })
        
        setTimeout(() => {
            updateCartItems()
        }, 200);
    }
    
	

    return (
        <Link to={`/products/details/${item.name.replace(/ /g, '-')}&id=${item.id}`} className="cartItem">
            <div className="itemIMG">
				<img src={item.images[0]} alt={item.name} />
			</div>
            <h3>
				{item.name}
				<br />
				<button>Detalhes</button>
			</h3>
			<h3 className="itemPrice">R$ {item.price}</h3>
			<h3 className="itemPrice">R$ {item.price * itemRender.quantity}</h3>
			<div className="countContainer">
				<button style={{borderRadius: "20px 0 0 20px"}} onClick={(e) => {e.preventDefault(); setItemQuantity(item.id, itemRender.quantity - 1) }}><i className="fi fi-rr-minus-small"></i></button>
				<input type="number" value={itemRender.quantity} onClick={(e) => {e.preventDefault()}} onChange={(e) => {setItemQuantity(item.id, Number(e.target.value))}}/>
				<button style={{borderRadius: "0 20px 20px 0"}} onClick={(e) => {e.preventDefault(); setItemQuantity(item.id, itemRender.quantity + 1)}}><i className="fi fi-rr-plus-small"></i></button>
			</div>
			<div style={{display: "flex", height: "96px", alignItems: "center"}}>
				<button className="itemDelete" onClick={(e) => {e.preventDefault(); removeFromCart(item.id)}}><i className="fi fi-rr-trash"></i></button>
			</div>
        </Link>
    )
}

export default CartItem;