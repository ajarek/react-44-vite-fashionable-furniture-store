import React from 'react'
import './Products.css'
const Products = () => {
  return (
    <div className='products-root'>
      <div className='header'>
        <h1>Home / Products</h1>
       
      </div>
      <div className='products-panel'>
          <div className='products-input'>
            <input
              type='search'
              name=''
              id=''
            />
          </div>
          <div className='products-button'>
            <button>🪟</button>
            <button>📰</button>
          </div>
          <div className="products-length"><span>23</span> Products Found</div>
          <hr />
          <form className="products-sort">
            <label htmlFor='sort'>Sort By</label>
            <select id="sort">
  <option value="price-lowest">price (lowest)</option>
  <option value="price-highest" selected>price (highest)</option>
  <option value="name-a">name (a-z)</option>
  <option value="name-z">name (z-a)</option>
</select>
          </form>
        </div>
      <div className='wrapper-products'>
        <div className='products-left'></div>
        <div className='products-right'></div>
      </div>
    </div>
  )
}

export default Products
