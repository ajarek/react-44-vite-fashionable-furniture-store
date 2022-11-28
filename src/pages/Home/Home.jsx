import React from 'react'
import Hero from '../../components/Hero/Hero'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import './Home.css'
const Home = () => {
  return (
    <main>
    <Hero />
    <FeaturedProducts />
    {/* <Services />
    <Contact /> */}
  </main>
  )
}

export default Home