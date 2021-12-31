import React,{useState} from 'react'
import "./cart-item.css"

function CartItem({cartItem,removeItem,addToCart,decreaseQuantity}) {
    const {title, image, price,quantity} = cartItem;      

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={image} alt="item" />
            </div>
            <span className="checkout-name">{title}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>decreaseQuantity(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addToCart(cartItem)}>&#10095;</div>
            </span>
            <span className="price">${price * quantity}</span>
            <div className="remove-button" onClick={()=>removeItem(cartItem)} >&#10005;</div>
        </div>
    )
}

export default CartItem
