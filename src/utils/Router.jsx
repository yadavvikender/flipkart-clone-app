import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Layout from '../components/Layout'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<HomePage/>}/>
          <Route path='products' element={<Products />} />
          <Route path='cart' element={<Cart />} />
          <Route path='product' element={<Product />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Router
