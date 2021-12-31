import React from 'react'
import "./games-in-shop.css"
import games from '../../data/games/games'
import {Link} from "react-router-dom"

function GamesShop() {
    return (
        <div>
        <div>
            <h1 className='featured-games-title'>Our Shop</h1>
            <hr />
        </div>
        <div className='games-container-home'>
        {games.map((game) => (
      <div className="game-container-home" key={game.id}>
        <div className="game-photo-container">
          <img className="game-photo-home" src={game.image} alt={game.title} />
        </div>
        <h2 className="game-title-home">{game.title}</h2>
        <div className='price-and-btn'>
          <span className="game-price-home">Price: ${game.price}</span>
          <Link to={`/games/${game.title}`}><button className="view-game-btn">
          View Game
        </button></Link>
        </div>
      </div>
    ))}
        </div>
    </div>
    )
}

export default GamesShop
