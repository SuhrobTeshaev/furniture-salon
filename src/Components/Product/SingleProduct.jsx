import React from "react";
import Products from "./Products";
import s from './Product.module.css';



const SingleProduct = () => {
  return (
     <div className={s.single_product}>
      
      <Products/>

    </div>
  );
};

export default SingleProduct;