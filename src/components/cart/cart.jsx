import React,{useState} from 'react'
import "./cart.css"
import {Link} from "react-router-dom"
import CartItem from '../cart-item/cart-item'

function Cart() {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("loggedUser")))
    return (
        <div className="checkout-page">
                {user.cartItems.length ? <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div> : null }
            
            {user.cartItems.length ? null : <div className="empty-message-checkout">
                <h1>Your Cart Is Empty</h1>
                <Link to="/games"><button type="button" className="go-to-shop">Go To Shop</button></Link>
                </div>}
                {user.cartItems.map(element => <CartItem key={element.id} cartItem={element} />)}
        </div>
    )
}

export default Cart
