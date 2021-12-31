import React,{useState} from 'react'
import "./detailed-game.css"
import { useParams, useNavigate } from "react-router-dom";

function DetailedGame({games,setLoggedUser}) {
    const { title } = useParams();
    const navigate = useNavigate();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("loggedUser")) ? JSON.parse(localStorage.getItem("loggedUser")) : "")

    const addToCart = (item) => {
      if(!user){
        navigate("/login")
      } else {
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
        setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")))
     } else {
       user.cartItems.push({...item, quantity: 1})
       localStorage.setItem("loggedUser" , JSON.stringify(user))
       const allUsers = JSON.parse(localStorage.getItem("users"));
        const filteredAllUsers = allUsers.filter((data) => user.id !== data.id);
        filteredAllUsers.push(user);
        localStorage.setItem("users", JSON.stringify(filteredAllUsers));
        setLoggedUser(JSON.parse(localStorage.getItem("loggedUser")))
     }
      }        
  }

    return (
        <div>
      {games
        .filter((game) => game.title === title)
        .map((game) => (
          <div className='detailed-game-container' key={game.id}>
            <div className="game-photo-container-detailed">
          <img className="game-photo-detailed" src={game.image} alt={game.title} />
        </div>
        <div className='price-and-btn-detailed'>
        <h2 className="game-title-detailed">{game.title}</h2>
        <p className='game-desc-detailed'>{game.description}</p>
          <span className="game-price-detailed">Price: ${game.price}</span>
         <button className="buy-game-btn" onClick={()=>addToCart(game)}>
          Add to Cart
        </button>
        </div>
          </div>
        ))}
    </div>
    )
}

export default DetailedGame
