import React, { useEffect, useState } from 'react'
import  s from './Product.module.css';
import { useParams } from 'react-router-dom';
const Product = () => {
  const {id} = useParams();

  const [post,setPost] = useState(null);
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(data =>setPost(data))
  },[id])

  return (
    
       <div className = {s.product}>
    {post && (
      <div className={s.product_card} >

        <div className={s.product_img}>
            <img src={post.image} alt="deyzy"/>
        </div>
        <div className={s.product_info}>

            <div className={s.product_title}>{post.title}</div>
            <div className={s.product_price}>{post.price}</div>
           <a href="/">
            <button>Add to cart</button>
           </a> 
        </div>

    </div>
    )
      }
    
</div>
   
    
   
  )
}

export default Product;