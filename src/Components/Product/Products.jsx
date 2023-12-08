import React, { useEffect, useState } from "react";
import s from "./Products.module.css";
import { Link } from 'react-router-dom';
const Products = ({products}) => {
 const [data,setData] = useState([]);
 useEffect(() => {
  setData(products);
 },[])
  return (

    <section>
      <div className={s.products}>
        {data.map((product) => 
          <div className={s.product_card} key={product.id}>
            <Link to={`/product/${product.id}`}>
            <div className={s.card_img}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className={s.card_info}>
              <h3>{product.title}</h3>
              <div className={s.price}>{product.price}$</div>
            </div>
            </Link>
            <div className="action">
              <button>КУПИТЬ</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
        
};

export default Products;
