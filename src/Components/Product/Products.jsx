import React from 'react';
import s from './Product.module.css';
import { productsList } from "../helpers/ProductList";


const Products = () => {
  return ( 
  <section>
        <div className={s.product}>
          {productsList.map(product =>
      <div className={s.product_card} key={product.id}>
        <div className={s.card_img}>
          <img src={product.img} alt={product.title} />
        </div>
        <div className={s.card_info}>
          <h3>{product.title}</h3>
          <div className={s.price}>{product.price}$</div>
        </div>
        <div className="action">
          <button>КУПИТЬ</button>
        </div>
      </div>
        )}
      </div>   
  </section>
  );
}

export default Products;