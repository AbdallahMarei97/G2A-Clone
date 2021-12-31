import React from 'react'
import Cart from '../../components/cart/cart'
import "./cart-page.css"

function CartPage(props) {
    return (
        <div>
            <Cart setLoggedUser={props.setLoggedUser}/>
        </div>
    )
}

export default CartPage
