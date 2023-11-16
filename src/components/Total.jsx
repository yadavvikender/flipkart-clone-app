import React, { useContext, useState } from 'react'
import { ProdContext } from '../context/ProductContext'
import { useEffect } from 'react';

const Total = () => {
  const { cartProducts } = useContext(ProdContext);
  const [total, setTotal] = useState({ count: 0, totalPrice: 0 });

  const calculateTotal = () => {
    let totalCount = 0;
    let totalPrice = 0;

    Object.keys(cartProducts).forEach((key) => {
      totalCount += cartProducts[key].count;
      totalPrice += cartProducts[key].count * cartProducts[key].details.price;
    });

    setTotal({
      count: totalCount,
      totalPrice: totalPrice
    });

    console.log('I am rendering');
  };
  
  useEffect(() => {
    calculateTotal()
  }, [cartProducts])

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>Total</div>
      <div>Quantity:{total.count}</div>
      <div>Price:{total.totalPrice}</div>
      <div><button >CheckOut</button></div>
    </div>
  )
}

export default Total
