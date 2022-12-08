import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import './Navigation.css'
const Navigation = () => {
  const [isOpen, setOpen] = useState(false)
  const [isLogin, setLogin] = useState(true)
  return (
    <nav className={'nav'}>
      <NavLink
        className={'link-logo'}
        to='/'
      >
        <img
          src='/images/logo.png'
          alt=''
        />
      </NavLink>

      <ul className={!isOpen ? 'navbar-nav' : 'navbar-nav navbar-none'}>
        <div className='wrapper'>
          <NavLink
            className={'link'}
            to='/'
          >
            Home
          </NavLink>

          <NavLink
            className={'link'}
            to='/about'
          >
            About
          </NavLink>
          <NavLink
            className={'link'}
            to='/products'
          >
            Products
          </NavLink>
        </div>
        <NavLink
          className={'link'}
          to='/cart'
        >
          Cart 🛒
        </NavLink>
       
      </ul>
      <div className='hamburger'>
        <Hamburger
          size={30}
          duration={0.3}
          distance='md'
          color={isOpen ? '#f15e50' : '#00001a'}
          easing='ease-in'
          rounded
          label='Show menu'
          onToggle={(toggled) => {
            setOpen(true)
            if (toggled) {
              // open a menu
            } else {
              setOpen(false)
            }
          }}
        />
      </div>
    </nav>
  )
}

export default Navigation
