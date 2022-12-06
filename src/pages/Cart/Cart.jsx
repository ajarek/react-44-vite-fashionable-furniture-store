import React, { useState } from 'react'
import { useEffect } from 'react'
import './Cart.css'
const Cart = () => {
  const localStorageData = JSON.parse(localStorage.getItem('data')) || []
  const [subTotal, setSubTotal] = useState([])

const deleteItem=(e)=>{
  
  let dataLocalStorage= JSON.parse(localStorage.getItem('data'));
   dataLocalStorage.forEach(function (data, index) {     
        if (data.id === e.target.id) {
          console.log(data.id,e.target.id);
           dataLocalStorage.splice(index, 1)
        }
    })
    
    localStorage.setItem('data', JSON.stringify(dataLocalStorage));
     window.location.reload()
}

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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {localStorageData?.map((data) => {
                subTotal.push(data.price * data.count)
                return (
                  <tr className='tr-data' key={data.id}>
                    <td>
                      <img
                        src={'/images/' + data.src}
                        alt={data.name}
                      />
                    </td>
                    <td>{data.name}</td>
                    <td>{data.price}</td>
                    <td>{data.count}</td>
                    <td>{(data.price * data.count).toFixed(2)}</td>
                    <td><button onClick={deleteItem} id={data.id}>❌</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <h2 className='total-data'>
            Total amount :$
            {subTotal ?( subTotal.reduce((a, b) => a + b, 0).toFixed(2) ): null}
          </h2>
        </>
      ) : (
        <h2 className='empty-data'>Cart is empty!</h2>
      )}
    </div>
  )
}

export default Cart
