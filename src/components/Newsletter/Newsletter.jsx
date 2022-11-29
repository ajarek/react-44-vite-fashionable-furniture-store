import React from 'react'
 import './Newsletter.css'
 export const Newsletter = () => {
  return (
    <div className='newsletter'>
     
        <h3>Join our newsletter and get 20% off</h3>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <form className='contact-form'>
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
            />
            <button type='submit' className='submit-btn'>
              Subscribe
            </button>
          </form>
        </div> 
    </div>
  )
}

export default Newsletter