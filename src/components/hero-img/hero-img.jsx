import React from 'react'
import "./hero-img.css"
import {Link} from "react-router-dom"
import Typical from 'react-typical'

function HeroImage() {
    return (
        <div class="home-container">
        <div class="home-left">
          <h5>Best Games in The Market</h5>
          {/* <h1><Typical loop={Infinity} wrapper="h1" steps={[
                        "Huge Sale On Your Favorite Game", 1000, "A Room to play your favorite game", 1000
                    ]}/></h1> */}
                    <h1>Huge Sale On Your Favorite Game</h1>
          <p>Check Our store with over 1000+ game waiting for you to play</p>
          <Link to="/games"><button>GET STARTED <i aria-hidden="true" class="fas fa-angle-right"></i></button></Link>
        </div>
        <div class="home-right">
            <img src="images/controller.png" alt="controller" />
        </div>
    </div>
    )
}

export default HeroImage
