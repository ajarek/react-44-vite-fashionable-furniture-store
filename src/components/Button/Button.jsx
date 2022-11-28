import React from 'react'
import { NavLink } from 'react-router-dom'
import './Button.css'
const Button = ({children,path}) => {
  return (
    <NavLink
            className={'button-link'}
            to={path}
          >
    <button
    className='button'
    >
      {children}
    </button>
    </NavLink>
  )
}

export default Button