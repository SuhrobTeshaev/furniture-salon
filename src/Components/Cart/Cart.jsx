import React from 'react'
import s from './Cart.module.css';
// import image from './../../img/Piona.jpeg'
import { useMyContext } from '../Context/Context';

const Cart = () => {
    const {cart} = useMyContext();
  return (
    <>
<div className={s.cart} >
        <h3>Корзина</h3>
        
        {cart.map(product => 
             <div className={s.cart_card} key={product.id}>
        <div className={s.cart_img}>
            <img src={product.image} alt="#"/>
        </div>
        <p>{product.title}</p>
        <span className={s.price}>{product.price}</span>
        <div className={s.cart_quantity}>
            <span className={s.minus}>-</span>
            <span className={s.count}>
          
            </span>
            <span className={s.plus}  >
                +
            </span>

        </div>
        <div className={s.close}>
            
        </div>
       </div>   
        
            
            )}
         
       

       <span>Total</span>
    </div> 
    
    </>
    
    )
}

export default Cart;