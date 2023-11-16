import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <nav style={{display:'flex'}}>
        <div style={{marginLeft:'40px'}}><NavLink to={'/'}>Home</NavLink></div>
        <div style={{marginLeft:'40px'}}><NavLink to={'/products'}>Products</NavLink></div>
        <div style={{marginLeft:'40px'}}><NavLink to={'/cart'}>Cart</NavLink></div>
      </nav>
    </div>
  )
}

export default Navigation
