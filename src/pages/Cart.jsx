import React, { useContext } from 'react'
import { ProdContext } from '../context/ProductContext'
import CartItem from '../components/CartItem';
import Total from '../components/Total';

const Cart = () => {
  const { cartProducts } = useContext(ProdContext)
  const noOfItems = Object.keys(cartProducts);


  return (
    <div style={{ textAlign: 'center', fontSize: '25px', marginTop: '60px' }}>
      {noOfItems !== 0 ?
          (
            Object.keys(cartProducts).map((id) => <CartItem key={id} product={cartProducts[id]} />)
          ) : (<div >Cart is empty !!</div>)
      }
      <Total />
    </div>
  )
}

export default Cart
