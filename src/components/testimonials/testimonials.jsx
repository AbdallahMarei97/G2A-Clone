import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import "./testimonials.css"

const images = [
    { url: "images/wit.jpg" },
    { url: "images/ghost.jpg" },
    { url: "images/red.jpg" },
  ];

function Testimonials() {
    return (
        <div>
            <div>
                <h1 className='featured-games-title'>Our Fav Screenshots</h1>
                <hr />
            </div>
            <div className="image-slider">
                <SimpleImageSlider
                    width="60%"
                    height={504}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                />
            </div>
    </div>
    )
}

export default Testimonials
