import React from 'react'
import s from './Cart.module.css';
import image from './../../img/Piona.jpeg'

const Cart = () => {
  return (
    <>
<div className={s.cart} >
        <h3>Корзина</h3>
       <div className={s.cart_card}>
        <div className={s.cart_img}>
            <img src={image} alt="#"/>
        </div>
        <span className={s.price}>335$</span>
        <div className={s.cart_quantity}>
            <span className={s.minus} >-</span>
            <span className={s.count}>
           number
            </span>
            <span className={s.plus} >
                +
            </span>

        </div>
        <div className={s.close}>
            x
        </div>
       </div> 

       <span>тут будет суммА</span>
    </div> 
    
    </>
    
    )
}

export default Cart;