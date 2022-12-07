import React, { useContext, useState } from 'react'
import { AppContext } from '../../App'
import ProductsPanel from '../../components/ProductsPanel/ProductsPanel'
import CardProducts from '../../components/CardProducts/CardProducts'
import './Products.css'
import Button from '../../components/Button/Button'

const Products = () => {
  const { selected, setSelected } = useContext(AppContext)

  const [filter, setFilter] = useState()

  const [choice, setChoice] = useState('category')

  if (selected === 'price-lowest') {
    var sortData = (a, b) => a.price - b.price
  }
  if (selected === 'price-highest') {
    var sortData = (a, b) => b.price - a.price
  }
  if (selected === 'name-a') {
    var sortData = (a, b) => a.name - b.name
  }
  if (selected === 'name-z') {
    var sortData = (a, b) => b.name.localeCompare(a.name)
  }

  if (choice === 'category') {
    var filterData = (a) =>
      filter ? a.category === filter : a.category === a.category
  }
  if (choice === 'company') {
    var filterData = (a) =>
      filter ? a.company === filter : a.company === a.company
  }
  return (
    <div className='products-root'>
      <div className='header'>
        <h1>Home / Products</h1>
      </div>
      <ProductsPanel />
      <div className='wrapper-products'>
        <div className='products-left'>
          <h4 className='products-h4'>Category</h4>
          <div className='products-buttons'>
            <button
              onClick={() => {
                setFilter(null)
              }}
            >
              All
            </button>
            <button
              onClick={() => {
                setFilter('Office')
                setChoice('category')
              }}
            >
              Office
            </button>
            <button
              onClick={() => {
                setFilter('Living Room')
                setChoice('category')
              }}
            >
              Living Room
            </button>
            <button
              onClick={() => {
                setFilter('Kitchen')
                setChoice('category')
              }}
            >
              Kitchen
            </button>
            <button
              onClick={() => {
                setFilter('Bedroom')
                setChoice('category')
              }}
            >
              Bedroom
            </button>
            <button
              onClick={() => {
                setFilter('Dining')
                setChoice('category')
              }}
            >
              Dining
            </button>
            <button
              onClick={() => {
                setFilter('Kids')
                setChoice('category')
              }}
            >
              Kids
            </button>
          </div>
          <form className='panel-sort'>
            <h4 className='products-h4'>Company</h4>
            <select
              className='select-sort'
              onChange={(e) => {
                setFilter(e.target.value)
                setChoice('company')
              }}
            >
              <option value={null}>all</option>
              <option value='Furniture'>furniture</option>
              <option value='Ikea'>ikea</option>
              <option value='Agata'>agata</option>
            </select>
          </form>
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
            filterData={filterData}
          />
        </div>
      </div>
    </div>
  )
}

export default Products
