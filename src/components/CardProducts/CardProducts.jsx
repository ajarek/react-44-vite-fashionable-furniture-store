
import React, {useEffect, useState} from 'react'
import './CardProducts.css'
export const CardProducts = ({length,width}) => {
  const [isData, setIsData]= useState([])
  useEffect(()=>{
  fetch('/data.json')
  .then(res => res.json())
  .then(res => {
    setIsData(res);
  })
})
  return (
    <div className="wrapper-featured">
    {isData?.map((el)=>{
       if(el.id<=length)
      return(
       <div key={el.id}>
       <img src={'/images/'+el.src} alt={el.name} width={width} />
      <p>{el.name}</p>
      <p>{'$'+el.price}</p>
      </div>
      )
    })}
    </div>
  )
}

export default CardProducts