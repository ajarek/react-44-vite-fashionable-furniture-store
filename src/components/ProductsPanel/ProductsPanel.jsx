import React,{useState,useContext} from 'react'
import './ProductsPanel.css'
import { AppContext } from '../../App'
const ProductsPanel = () => {
  const options=[
    {value:'price-lowest',text:'Price (lowest)'},
    {value:'price-highest',text:'Price (highest)'},
    {value:'name-a',text:'(a-z)'},
    {value:'name-z',text:'(z-a)'},
  ]
  const {selected, setSelected}= useContext(AppContext)
  const handleChange = event => {
    // console.log(event.target.value);
    setSelected(event.target.value);
  };
  return (
    <div className='panel'>
    

      
      
      <div className='panel-hr'>
        {' '}
        <hr />
      </div>
      
        <label
          className='label-sort'
          htmlFor='label-sort'
        >
          Sort By{' '}
        </label>
        

          <select className='select-sort' value={selected} onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      
    </div>
  )
}

export default ProductsPanel
