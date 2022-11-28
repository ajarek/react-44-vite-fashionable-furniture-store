import React from 'react'
import Button from '../Button/Button'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-div'>
        <h1>Design Your <br /> Comfort Zone</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        
        <Button
        path={'/products'}
        >SHOP NOW</Button>
        
      </div>
      <div className='right-div'>
        <img src="/images/modern-furniture-Colberg.jpg" alt="" />
      </div>
    </div>
  )
}

export default Hero
