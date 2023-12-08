import React, { useEffect, useState } from "react";
import Products from "./Products";
import s from './Products.module.css';
import Product from "./Product";



const SingleProduct = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  // if(error) {
  //   return <div>Ошибка:{error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
  return (
     <div className={s.single_product}>
      {data.map(product => 
      <div key={product.id}>
      <Products products = {product} />
      <Product  products = {product}/>
      </div>
        
        )}
      
    </div>
  );
  
};

export default SingleProduct;
