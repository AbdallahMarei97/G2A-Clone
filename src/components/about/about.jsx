import React from 'react'
import "./about.css"

function About() {
    return (
        <div>
            <div>
                <h1 className='featured-games-title'>Our Mission</h1>
                <hr />
            </div>
            <div className='about-container'>
                <p>
                    Our goal is to share our experience and our love for video games with the world and the people in it, and to bring joy to everyone around us through video games.
                </p>
                <img src='images/mario.png' alt='characters' />
            </div>
        </div>
    )
}

export default About
