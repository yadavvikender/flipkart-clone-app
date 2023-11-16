import React, { useEffect, useState } from 'react'
import { product } from '../utils/product';
import Card from '../components/Card';

const Products = () => {
    const [products, setProducts] = useState(null);
    const getProducts = async () => {
        try {
            const res = await fetch('https://dummyjson.com/products/')
            const data = await res.json();
            setProducts(data.products)
        } catch (error) {
            setProducts([])
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])
    return (
        <div style={{ border: '1px solid', backgroundColor: 'grey', minHeight: '90vh', display:'flex', flexWrap:'wrap', margin:'20px', justifyContent:'space-around', marginTop:'60px' }}>
            {
                products !== null ?
                    (products.length > 0 ?
                        (
                            products.map((product)=><Card key={product.id} product={product}/>)
                        ) : (<div>No product found !!</div>)) :
                   ( <div> Loading..</div>)
            }
        </div>
    )
}

export default Products
