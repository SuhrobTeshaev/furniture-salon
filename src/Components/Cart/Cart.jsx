import React,{useState} from 'react'
import s from './Cart.module.css';

const Cart = () => {
    const [count,setCount] = useState(1);
    

    function increment() {
        return setCount(count+1);
    }
    function dicrement() {
        return setCount(count-1);
    }
  
  return (
    <>
<div className={s.cart} >
        <h3>Корзина</h3>
        {post && (
          <div className={s.cart_card}>
        <div className={s.cart_img}>
            <img src={post.image} alt="#"/>
        </div>
        <p>{post.title}</p>
        <span className={s.price}>{post.price}</span>
        <div className={s.cart_quantity}>
            <span className={s.minus} onClick={dicrement} >-</span>
            <span className={s.count}>
           {count}
            </span>
            <span className={s.plus} onClick={increment} >
                +
            </span>

        </div>
        <div className={s.close}>
            x
        </div>
       </div>   
        )}
       

       <span>тут будет суммА</span>
    </div> 
    
    </>
    
    )
}

export default Cart;