import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import'./Cart.css'
const Cart = () => {
   const localStorageData = JSON.parse(localStorage.getItem('data'))||[]
   const [subTotal,setSubTotal] =useState([])
   
  return (
   
    <div className='cart-root'>
     {localStorageData.length>0?(
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
        {localStorageData?.map((data)=>{
           subTotal.push(data.price*data.count)
          return(
            <tr key={data.id}>
            <td><img src={'/images/'+data.src} alt={data.name} /></td>
            <td>{data.name}</td>
            <td>{data.price}</td>
            <td>{data.count}</td>
            <td>{data.price*data.count}</td>
            </tr>
          )
        })} 
     </tbody>   
    </table>
    <h2>Subtotal :${subTotal?subTotal.reduce((a,b)=>a+b,0):null}</h2>
    </>
      ):<h2>Cart is empty!</h2>}
    </div>
  )
  
}

export default Cart