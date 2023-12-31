import React, { useEffect, useState } from "react";
import s from "./Cart.module.css";
import { useMyContext } from "../Context/Context";
import { useParams } from "react-router-dom";

const Cart = () => {
  const { id } = useParams();
  const {cart,setCart} = useMyContext();
  const [count, setCount] = useState(1);
  const [total,setTotal] = useState(0);

  const increment = () => {
    return setCount((count)=> count+1);
  }

  const decrement = () => {
    if(count>1){
        setCount(count => count-1);
    }
  }

  const addPriceToCart = () => {
    setTotal(cart.reduce((quantity,el) => quantity + Number(el.price),0));
  }

  useEffect(()=> {
    addPriceToCart();
  },[cart]);

  const removeItem = () => {
    setCart(cart.filter((c) => c.id !== id));
  };
  return (
    <>
      <div className={s.cart} style={{ overflow: 'auto' }}>
        <h3>Корзина</h3>

        {cart.map((product) => (
          <div className={s.cart_card} key={product.id} >
            <div className={s.cart_img}>
              <img src={product.image} alt="#" />
            </div>
            <p>{product.title}</p>
            <span className={s.price}>{product.price}$</span>
            <div className={s.cart_quantity}>
              <span className={s.minus} onClick={decrement} >-</span>
              <span className={s.count}>{count}</span>
              <span className={s.plus} onClick={increment} >+</span>
            </div>
            <div className={s.close}>
              <span onClick={() => removeItem()}>x</span>
            </div>
          </div>
        ))}
           <span>Total:{total*count}$</span>
      </div>
    </>
  );
};

export default Cart;
