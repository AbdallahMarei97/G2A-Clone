import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import "./testimonials.css"

const images = [
    { url: "images/last-of-us-reviews.png" },
    { url: "images/fallout.jpg" },
    { url: "images/cross.jpg" },
  ];

function Testimonials() {
    return (
        <div>
            <div>
                <h1 className='featured-games-title'>Our Game Reviews</h1>
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
