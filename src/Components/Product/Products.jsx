import React from 'react';
import s from './Products.module.css';


const Products = ({...product}) => {

  return ( 
  <section>

        <div className={s.products}>
          {product.map(products =>
      <div className={s.products_card} key={products.id}>
        <div className={s.card_img}>
          <img src={products.img} alt={products.title} />
        </div>
        <div className={s.card_info}>
          <h3>{products.title}</h3>
          <div className={s.price}>{products.price}$</div>
        </div>
        <div  className="action">
         <button>КУПИТЬ</button>
        </div>
      </div>
        )}
      </div>  
  </section>
  );
}

export default Products;