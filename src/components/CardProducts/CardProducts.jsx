import { NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './CardProducts.css'
export const CardProducts = ({ length, width, sortData, filterData }) => {
  const [isData, setIsData] = useState([])
  
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((res) => {
        setIsData(res.filter(filterData))
      })
  })
  
  return (
    <div className='wrapper-featured'>
      {isData?.sort(sortData).map((el, index, arr) => {
        if (el.id <= length)
          return (
            <div key={el.id}>
              <NavLink
                className={'button-link'}
                to={`/product/${el.id}`}
              >
                <img
                  src={'/images/' + el.src}
                  alt={el.name}
                  width={width}
                />
                <p>{el.name}</p>
                <p>{'$' + el.price}</p>
              </NavLink>
            </div>
          )
      })}
    </div>
  )
}

export default CardProducts
