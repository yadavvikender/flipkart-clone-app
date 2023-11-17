import React, { useContext, useEffect, useState } from 'react'
import { ProdContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';
 
const Card = ({ product }) => {
    const { id, thumbnail, price, title } = product;
    const {cartProducts, setCartProducts} = useContext(ProdContext);
    const navigate= useNavigate();
    const [added, setAdded]= useState(false);

    const removeFromCart=(e)=>{
        e.stopPropagation()
        delete cartProducts[id];
        setCartProducts(cartProducts);
        setAdded(false)
    }
    const addToCart=(e)=>{
        e.stopPropagation()
        setCartProducts({...cartProducts,[id]:{count:1, details:{ id, thumbnail, price, title }}});
        setAdded(true)
    }
    useEffect(()=>{ if(cartProducts[id])
       { setAdded(true)}},[])
    
    
    return (
        <div id={id} style={{ height: '120px', width: '120px', border: '1px solid', padding: '8px' }}
        onClick={()=>{
            navigate(`product/${id}`)
        }}
        >
            <div>
                <img src={thumbnail} alt={title} height={'60px'} width={'90px'} />
            </div>
            <div>
                <strong style={{ fontSize: '12px' }}>{title.toUpperCase()}</strong>
                <div style={{ fontSize: '10px' }}>
                    <span>Price:{price}</span>
                    {added?<button style={{ fontSize: '10px' }} 
                    onClick={ removeFromCart }
                    >Remove from cart</button>:
                    <button style={{ fontSize: '10px' }} 
                    onClick={ addToCart }
                    >Add to cart</button>}
                </div>

            </div>
        </div>
    )
}

export default Card
