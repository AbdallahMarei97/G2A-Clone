import React from 'react'
import FeaturedGames from '../../components/featured-games/featured-games'
import FeaturedRooms from '../../components/featured-rooms/featured-rooms'
import HeroImage from '../../components/hero-img/hero-img'

function HomePage() {
    return (
        <div>
            <HeroImage />
            <FeaturedGames />
            <FeaturedRooms />
        </div>
    )
}

export default HomePage
