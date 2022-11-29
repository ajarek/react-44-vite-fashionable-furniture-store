import React from 'react'
import './CardCustom.css'
export const CardCustom = ({icon,title,info}) => {
  return (
    <div className='card-custom'>
      <div className="icon">{icon}</div>
      <div className="title">{title}</div>
      <div className="info">{info}</div>
    </div>
  )
}

export default CardCustom