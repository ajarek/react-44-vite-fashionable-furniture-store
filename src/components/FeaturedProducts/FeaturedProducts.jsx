import { Button } from '../../components/Button/Button'
import { NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './FeaturedProducts.css'

const FeaturedProducts = () => {
  const [isData, setIsData] = useState([])
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((res) => {
        setIsData(res)
      })
  })
  return (
    <div className='root'>
      <h1>Featured Products</h1>
      <hr />
      
      <Button path={'/products/'}>ALL PRODUCTS</Button>
      <div className='wrapper-featured'>
      {isData?.map((el, index, arr) => {
        if (el.id <= 2)
          return (
            <div key={el.id}>
              <NavLink
                className={'button-link'}
                to={`/product/${el.id}`}
              >
                <img
                  src={'/images/' + el.src}
                  alt={el.name}
                  width={'320px'}
                />
                <p>{el.name}</p>
                <p>{'$' + el.price}</p>
              </NavLink>
            </div>
          )
      })}
    </div>
    </div>
  )
}

export default FeaturedProducts
