import React from "react";
import Products from "./Products";
import s from './Products.module.css';
import { useSelector } from "react-redux";



const SingleProduct = () => {
  const {product} = useSelector((state) => state);
  return (
     <div className={s.single_product}>
      <Products {...product}/>
    </div>
  );
};

export default SingleProduct;
