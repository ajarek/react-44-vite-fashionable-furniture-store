import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCounter } from '../../Hooks/useCounter'
import Button from '../../components/Button/Button'
import './ProductsId.css'
const ProductsId = () => {
  const [isData, setIsData] = useState([])
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((res) => {
        setIsData(res)
      })
  })
  const { id } = useParams()
  const item = isData.find((el) => el.id === id)
  const { count, setCount, increment, decrement } = useCounter(0)

  const saveItem=(id,src,name,price,count) =>{
    const localStorageData = localStorage.getItem('data')
    let data
    localStorageData === null? data = []: data = JSON.parse(localStorageData)
    const newData = {id,src,name,price,count}
    data.push(newData)
    localStorage.setItem('data', JSON.stringify(data))
  }
 
  {
    if (item) {
      return (
        <div className='productsId-root'>
          <div className=' header'>
            <h1>Home / Products/{item.name}</h1>
          </div>
          <div className='wrapper-productsId'>
            <div className='left-productsId'>
              <img
                src={'/images/' + item.src}
                alt={item.name}
              />
            </div>
            <div className='right-productsId'>
              <div>
                <h1>{item.name}</h1>
              </div>
              <div>
                <h3>${item.price}</h3>
              </div>

              <p>{item.description}</p>
              <h4>
                Available:{' '}
                <span> {item.available ? 'in Stock' : 'out of stock'}</span>
              </h4>
              <h4>
                Brand : <span>{item.company}</span>
              </h4>
              <h4>
                Colors : <span>{item.color.map((el) => ' ' + el)}</span>
              </h4>
              <div className='counter'>
                <button onClick={decrement}>➖</button>

                <div className='quantity'>{count}</div>
                <button onClick={increment}>➕</button>
              </div>
              <Button path={'/cart'} onClick={()=>saveItem(item.id,item.src,item.name,item.price,count)}>ADD TO CART</Button>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default ProductsId
