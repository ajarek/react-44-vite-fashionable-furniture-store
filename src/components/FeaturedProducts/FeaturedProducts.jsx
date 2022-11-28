import React, {useEffect, useState} from 'react'
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
    <div>
      <h1>Featured Products</h1>
      {isData?.map((el)=>{
         if(el.id<=2)
        return(
         
        <p key={el.id}>{el.name}</p>
        )
      })}
      </div>
  )
}

export default FeaturedProducts