import React, {useEffect, useState} from 'react'
import {Button} from '../../components/Button/Button'
import './FeaturedProducts.css'

const FeaturedProducts = () => {
  const [isData, setIsData]= useState([])
  useEffect(()=>{
  fetch('/data.json')
  .then(res => res.json())
  .then(res => {
    setIsData(res);
  })
 
})
  return (
    <div className='root'>
      <h1>Featured Products</h1>
      <hr />
      <div className="wrapper-featured">
      {isData?.map((el)=>{
         if(el.id<=2)
        return(
         <div key={el.id}>
         <img src={'/images/'+el.src} alt={el.name} />
        <p>{el.name}</p>
        <p>{'$'+el.price}</p>
        </div>
        )
      })}
      </div>
      <Button
      path={'/products/'}
      >
        ALL PRODUCTS
        </Button>
      </div>
  )
}

export default FeaturedProducts