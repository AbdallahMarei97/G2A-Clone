import React from 'react'
import "./detailed-game.css"
import { useParams, useNavigate } from "react-router-dom";

function DetailedGame({games}) {
    const { title } = useParams();
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
         <button className="buy-game-btn">
          Add to Cart
        </button>
        </div>
          </div>
        ))}
    </div>
    )
}

export default DetailedGame
