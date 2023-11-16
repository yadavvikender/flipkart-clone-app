import React, { useContext }  from 'react'
import ProductContext, { ProdContext } from '../context/ProductContext';

const CartItem = ({ product }) => {
    const {count, details :{id, thumbnail, price, title} } = product;
    const {cartProducts, setCartProducts} = useContext(ProdContext);
    const increment=()=>{
        cartProducts[id] = {...cartProducts[id], count:cartProducts[id].count+1} ;
        setCartProducts({...cartProducts })
    }
    const decrement=()=>{
        if(cartProducts[id].count>0)
         {cartProducts[id] = {...cartProducts[id], count:cartProducts[id].count-1} ;
         if(cartProducts[id].count==0){
            delete cartProducts[id];
            setCartProducts({...cartProducts})
         }
         else {setCartProducts({...cartProducts })}
        }
        }
    
    return (
        <div id={id} style={{
            height: '120px',
            border: '1px solid',
            padding: '8px',
            display: 'flex',
            justifyContent: "space-evenly",
            alignItems:'center'
        }}>
            <div>
                <img src={thumbnail} alt={title} height={'60px'} width={'90px'} />
            </div>
            <div>
                <strong style={{ fontSize: '12px' }}>{title.toUpperCase()}</strong>
                <div style={{
                    fontSize: '15px',
                    display: 'flex',
                }}>
                    <span>Price:{price}</span>
                </div>
            </div>
            <div style={{display:'flex',alignItems:'center', fontSize:'18px'}}>
                <button style={{height:'25px',width:'25px',marginRight: '10px' }} onClick={decrement}>-</button>
                <p style={{ marginRight: '10px' }}>{count}</p>
                <button style={{height:'25px',width:'25px',marginRight: '10px' }} onClick={increment}>+</button>
                <div style={{ marginLeft: '10px' }}>Remove</div>
            </div>
        </div>
    )
}

export default CartItem
