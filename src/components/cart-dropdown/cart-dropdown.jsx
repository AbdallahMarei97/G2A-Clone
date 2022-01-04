import React,{useState} from 'react'
import "./cart-dropdown.css"
import { Link } from 'react-router-dom'
import CartDropDownItem from '../cart-dropdown-item/cart-dropdown-item'

const CartDropdown = (props) => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("loggedUser")));
    
    return (
        <div className="cart-dropdown">
        <div className="cart-items" >
            {props.loggedUser.cartItems.length ? props.loggedUser.cartItems.map(cartItem => <CartDropDownItem  key={cartItem.id} item={cartItem} />) : <span className="empty-message">Your cart is empty</span>}
        </div>
        <Link to="/cart" onClick={props.handleHidden} className='go-to-cart'><button type="button">
            Go To Cart
        </button></Link>
    </div>
    )
}

export default CartDropdown
