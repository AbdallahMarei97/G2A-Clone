import React,{useState} from 'react'
import "./cart.css"
import {Link} from "react-router-dom"
import CartItem from '../cart-item/cart-item'

function Cart({setLoggedUser}) {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("loggedUser")));
    const removeItem = (item) => {
            const existingCartItem = user.cartItems.find(
            cartItem => cartItem.id === item.id)
            user.cartItems.splice(user.cartItems.indexOf(existingCartItem),1)
            localStorage.setItem("loggedUser" , JSON.stringify(user))
            const allUsers = JSON.parse(localStorage.getItem("users"));
            const filteredAllUsers = allUsers.filter((data) => user.id !== data.id);
            filteredAllUsers.push(user);
            localStorage.setItem("users", JSON.stringify(filteredAllUsers));
            setUser(JSON.parse(localStorage.getItem("loggedUser")))
            setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")))
    }

    const decreaseQuantity = (item) => {
        const existingCartItem = user.cartItems.find(cartItem => cartItem.id === item.id)
        if(existingCartItem.quantity === 1){
           user.cartItems.splice(user.cartItems.indexOf(existingCartItem),1)
           localStorage.setItem("loggedUser" , JSON.stringify(user))
            const allUsers = JSON.parse(localStorage.getItem("users"));
            const filteredAllUsers = allUsers.filter((data) => user.id !== data.id);
            filteredAllUsers.push(user);
            localStorage.setItem("users", JSON.stringify(filteredAllUsers));
            setUser(JSON.parse(localStorage.getItem("loggedUser")))
            setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")))
        } else {
            user.cartItems.map(cartItem => cartItem.id === item.id ? cartItem.quantity -=1 : cartItem) 
            localStorage.setItem("loggedUser" , JSON.stringify(user))
            const allUsers = JSON.parse(localStorage.getItem("users"));
            const filteredAllUsers = allUsers.filter((data) => user.id !== data.id);
            filteredAllUsers.push(user);
            localStorage.setItem("users", JSON.stringify(filteredAllUsers));
            setUser(JSON.parse(localStorage.getItem("loggedUser"))) 
            setLoggedUser(JSON.parse(localStorage.getItem("loggedUser"))) 
        }
    }

    const addToCart = (item) => {
          const existingCartItem = user.cartItems.find(
            cartItem => cartItem.id === item.id
        )
        if(existingCartItem){
          user.cartItems.map(cartItem => cartItem.id === item.id ? cartItem.quantity +=1 : cartItem)
          localStorage.setItem("loggedUser" , JSON.stringify(user))
          const allUsers = JSON.parse(localStorage.getItem("users"));
          const filteredAllUsers = allUsers.filter((data) => user.id !== data.id);
          filteredAllUsers.push(user);
          localStorage.setItem("users", JSON.stringify(filteredAllUsers));
          setUser(JSON.parse(localStorage.getItem("loggedUser")))
          setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")))
       } else {
         user.cartItems.push({...item, quantity: 1})
         localStorage.setItem("loggedUser" , JSON.stringify(user))
         const allUsers = JSON.parse(localStorage.getItem("users"));
          const filteredAllUsers = allUsers.filter((data) => user.id !== data.id);
          filteredAllUsers.push(user);
          localStorage.setItem("users", JSON.stringify(filteredAllUsers));
          setUser(JSON.parse(localStorage.getItem("loggedUser")))
          setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")))
       }
    }  

    return (
        <div className="checkout-page">
                {user.cartItems.length ? <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Title</span>
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
                {user.cartItems.map(element => <CartItem key={element.id} cartItem={element} removeItem={removeItem} decreaseQuantity={decreaseQuantity} addToCart={addToCart}/>)}
                {user.cartItems.length ? <div className="total">
                <span>Total: ${user.cartItems.reduce((total,item) => total + item.quantity * item.price, 0)}</span>
                <Link to="/checkout"><button type="button" className="confirm-buy">Go to Checkout</button></Link>
            </div> : ""}
        </div>
    )
}

export default Cart
