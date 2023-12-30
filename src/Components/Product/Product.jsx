import React, { useEffect, useState } from "react";
import s from "./Product.module.css";
import { useParams } from "react-router-dom";
import { useMyContext } from "../Context/Context";
const Product = () => {
  const { id } = useParams();
  const { cart, setCart } = useMyContext();
  const [post, setPost] = useState(null);

  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  const addItemToCart = () => {
    setCart([...cart, post]);
  }
  const removeItem = () => [
    setCart(cart.filter(c => c.id !== id))
  ]

  return (
    <div className={s.product}>
      {post && (
        <div className={s.product_card}>
          <div className={s.product_img}>
            <img src={post.image} alt="deyzy" />
          </div>
          <div className={s.product_info}>
            <div className={s.product_title}>{post.title}</div>
            <div className={s.product_price}>{post.price}</div>
            <div>
              <button onClick={() => addItemToCart()}>Add to cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
