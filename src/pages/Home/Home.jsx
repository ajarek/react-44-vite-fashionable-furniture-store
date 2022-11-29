import React from 'react'
import Hero from '../../components/Hero/Hero'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import { CustomFurniture } from '../../components/CustomFurniture/CustomFurniture'
import './Home.css'
const Home = () => {
  return (
    <main>
    <Hero />
    <FeaturedProducts />
    <CustomFurniture/>
  </main>
  )
}

export default Home