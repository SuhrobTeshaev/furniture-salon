import React from 'react'
import  s from './Product.module.css';
import image from './../../img/Deyzy.jpg';
const Product = () => {
  return (
    <>
    {<h3>Product</h3>?(
       <div className = {s.product}>
    <h1>Product</h1>
    <div className={s.product_card} >

        <div className={s.product_img}>
            <img src={image} alt="deyzy"/>
        </div>
        <div className={s.product_info}>

            <div className={s.product_title}>title</div>
            <div className={s.prodict_price}>price</div>
           <a href="/">
            <button>Add to cart</button>
           </a> 
        </div>

    </div>
</div>
    ):(
      <div>Пусто</div>
    )

    }
    </>
    
   
  )
}

export default Product;