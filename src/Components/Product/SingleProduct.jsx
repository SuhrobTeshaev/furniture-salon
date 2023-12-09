import React, { useEffect, useState } from "react";
import Products from "./Products";
import s from "./Products.module.css";

const SingleProduct = () => {
  
  return (
    <div className={s.single_product}>
      <Products />
      
    </div>
  );

};

export default SingleProduct;
