import React from 'react'
import { NavLink } from 'react-router-dom'
import './Button.css'
export const Button = ({children,path,onClick}) => {
  return (
    <NavLink
            className={'button-link'}
            to={path}
          >
    <button
    className='button'
    onClick={onClick}
    >
      {children}
    </button>
    </NavLink>
  )
}

export default Button