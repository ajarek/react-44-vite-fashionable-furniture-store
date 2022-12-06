import React,{useContext} from 'react'
import { AppContext } from '../../App'
import ProductsPanel from '../../components/ProductsPanel/ProductsPanel'
import CardProducts from '../../components/CardProducts/CardProducts'
import './Products.css'
import Button from '../../components/Button/Button'

const Products = () => {
  const {selected, setSelected}= useContext(AppContext) 
  console.log(selected);
  if (selected==='price-lowest'){
 var sortData = (a,b)=>a.price-b.price}
  if (selected==='price-highest'){
 var sortData = (a,b)=>b.price-a.price}
  if (selected==='name-a'){
 var sortData = (a,b)=>a.name-b.name}
  if (selected==='name-z'){
 var sortData = (a,b)=>b.name.localeCompare(a.name)}
  return (
    <div className='products-root'>
      <div className='header'>
        <h1>Home / Products</h1>
      </div>
      <ProductsPanel length={13}/>
      <div className='wrapper-products'>
        <div className='products-left'>
          <h4 className='products-h4'>Category</h4>
          <div className='products-buttons'>
            <button>All</button>
            <button>Office</button>
            <button>Living Room</button>
            <button>Kitchen</button>
            <button>Bedroom</button>
            <button>Dining</button>
            <button>Kids</button>
          </div>
          <form className='panel-sort'>
            <h4 className='products-h4'>Company</h4>
            <select
              className='select-sort'
              onChange={() => {}}
            >
              <option value='all'>all</option>
              <option value='furniture'>furniture</option>
              <option value='Ikea'>ikea</option>
              <option value='Agata'>agata</option>
            </select>
          </form>
          <h4 className='products-h4'>Colors</h4>
          <div className='products-colors'>
            <button className='all'>all</button>
            <button className='red'></button>
            <button className='green'></button>
            <button className='blue'></button>
            <button className='black'></button>
          </div>
          <h4 className='products-h4'>Price</h4>
          <div className='products-price'>
            <p>
              $<span>300</span>
            </p>
            <input
              type='range'
              name=''
              id=''
              value={300}
              min={0}
              max={700}
              onChange={() => {}}
            />
          </div>
          <div className='products-shipping'>
            <p>Free Shipping</p>
            <input
              type='checkbox'
              name=''
              id=''
              
              onChange={() => {}}
            />
          </div>
          <div className='clear'>
            <Button
              children={'Clear Filters'}
              path={'/'}
            />
          </div>
        </div>
        <div className='products-right'>
          <CardProducts
            length={12}
            width={'300px'}
            sortData={sortData}
          />
        </div>
      </div>
    </div>
  )
}

export default Products
