import React, { useState} from 'react'
import { useEffect } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import './Cart.css'
const Cart = () => {
  const localStorageData = JSON.parse(localStorage.getItem('data')) || []
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    const arrSubTotal = [...document.querySelectorAll('.subtotal')]
    const arr = arrSubTotal.map((item) => Number(item.innerHTML))
    const total = arr.reduce((a, b) => a + b, 0)
    setSubTotal(total)
  })

  return (
    <div className='cart-root'>
      {localStorageData.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {localStorageData?.map((data) => {
                const { count, setCount, increment, decrement } = useCounter()
                useEffect(() => {
                  setCount(data.count)
                }, [])

                return (
                  <tr key={data.id}>
                    <td>
                      <img
                        src={'/images/' + data.src}
                        alt={data.name}
                      />
                    </td>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>
                      {' '}
                      <div className='counter'>
                        <button onClick={decrement}>➖</button>

                        <div className='quantity'>{count}</div>
                        <button onClick={increment}>➕</button>
                      </div>
                    </td>

                    <td className='subtotal'>{data.price * count}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <h2>Subtotal ${subTotal}</h2>
        </>
      ) : (
        <h2 className='empty'>Cart is empty!</h2>
      )}
    </div>
  )
}

export default Cart
