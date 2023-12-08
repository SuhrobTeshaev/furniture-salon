import React from 'react'
import  s from './Product.module.css';
import { useParams } from 'react-router-dom';
const Product = ({products}) => {
const { productId } = useParams();
const product = products.find(p => p.id === parseInt(productId));
  return (
    
       <div className = {s.product}>
    <h1>Product</h1>
    <div className={s.product_card} >

        <div className={s.product_img}>
            <img src={product.image} alt="deyzy"/>
        </div>
        <div className={s.product_info}>

            <div className={s.product_title}>{product.title}</div>
            <div className={s.prodict_price}>{product.price}</div>
           <a href="/">
            <button>Add to cart</button>
           </a> 
        </div>

    </div>
</div>
   
    
   
  )
}

export default Product;