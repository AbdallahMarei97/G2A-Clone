import React,{useState} from "react";
import "./navbar.css";
import { Link} from "react-router-dom";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {ReactComponent as Logo} from "../../assets/logo_g2a_white.svg";
// import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const NavBar = (props) => {
  
    const [navBarActive, setNavBarActive] = useState(false)
    const [hidden,setHidden] = useState(true)
    

  const showMenu = () => {
    setNavBarActive(!navBarActive)
    setHidden(true)
  };

  
  const handleHidden = () => {
    setHidden(!hidden)
  }
  const signOut = () => {
    localStorage.removeItem("loggedUser");
    props.setLoggedUser("")
  }
    // const localUsers = JSON.parse(localStorage.getItem("users"))
    // let counter = 0;
    // if(this.props.currentUser){
    //   localUsers.forEach(user => {
    //       if(user.username === this.props.currentUser.username && user.password === this.props.currentUser.pass){
    //           let cart = user.cartItems
    //           console.log(cart)
    //           cart.map(item => counter += item.quantity)    
    //       }
    //   })
    // }
    return (
      <div className="header">
        <div onClick={showMenu}>
          <i className="fas fa-bars burgerMenu"></i>
        </div>

        <div className="nav">
          <div className="navCenter">
         <Link to="/"><Logo className="logo" /></Link>
          </div>
          <ul className={`${navBarActive ? "activeBurger" : ""} topList`}>
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            {props.loggedUser ?  <div className="sign-out">
              <li><Link to="/profile">Profile</Link></li>
              <li onClick={signOut}><Link to="/login">Sign Out</Link></li> 
            </div>  : <li>
              <Link to="/login">SIGN IN</Link>
            </li>}  
          </ul>
          {props.loggedUser ? <Link to="/cart"><div className="shoppingCart" onClick={handleHidden}>
              <ShoppingIcon className="shopping-icon"/>
              <span className="item-count">0</span>
          </div></Link> : null}
          
        </div>
        {/* {this.props.hidden ? null : <CartDropdown removeCompletely={this.props.removeCompletely} currentUser={this.props.currentUser} handleHidden={this.props.handleHidden}/>} */}
      </div>
    );
  
}

export default NavBar;