import React from 'react'
import Hero from '../../components/Hero/Hero'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import { CustomFurniture } from '../../components/CustomFurniture/CustomFurniture'
import { Newsletter } from '../../components/Newsletter/Newsletter'

import './Home.css'
const Home = () => {
  return (
    <main>
    <Hero />
    <FeaturedProducts />
    <CustomFurniture/>
    <Newsletter/>
  </main>
  )
}

export default Home