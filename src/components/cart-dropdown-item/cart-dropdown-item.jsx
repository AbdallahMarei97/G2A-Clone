import React from 'react'
import "./cart-dropdown-item.css"

function CartDropDownItem({item}) {
    return (
        <div className="cart-item">
        <img src={item.image} alt="item" />
        <div className="item-details">
            <span className="item-name">{item.title}</span>
            <span className="item-price">{item.quantity} x ${item.price}</span>
        </div>
    </div>
    )
}

export default CartDropDownItem
