import React from 'react'
import './ProductsPanel.css'

const ProductsPanel = ({ length }) => {
  return (
    <div className='panel'>
      <div className='panel-input'>
        <input
          type='search'
          name=''
          id=''
          placeholder='Search'
        />
      </div>

      <div className='panel-button'>
        <button>🪟</button>
        <button>📰</button>
      </div>
      <div className='panel-length'>
        <span>{length}</span> Products Found
      </div>
      <div className='panel-hr'>
        {' '}
        <hr />
      </div>
      <form className='panel-sort'>
        <label
          className='label-sort'
          htmlFor='label-sort'
        >
          Sort By{' '}
        </label>
        <select className='select-sort'>
          <option value='price-lowest'>Price (lowest)</option>
          <option
            value='price-highest'
            
          >
            Price (highest)
          </option>
          <option value='name-a'>Name (a-z)</option>
          <option value='name-z'>Name (z-a)</option>
        </select>
      </form>
    </div>
  )
}

export default ProductsPanel
