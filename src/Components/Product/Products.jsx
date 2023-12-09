import React, { useEffect, useState } from "react";
import s from "./Products.module.css";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Products = () => {
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
  if(error) {
    return <div>Ошибка:{error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return (

    <section>
      <div className={s.products}>
         {data.map(product=>
         <div className={s.product_card} >
            <Link key={data.id} to={`/products/${product.id}`}>
            <div className={s.card_img}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className={s.card_info}>
              <h3>{product.title}</h3>
              <div className={s.price}>{product.price}$</div>
            </div>
            </Link>
            <Link key={data.id} to={`/cart/${product.id}`}>
            <div className="action">
              <button>КУПИТЬ</button>
            </div>
            </Link>
            
          </div>
         
         )}
          
        
      </div>
    </section>
  );
  }   
};

export default Products;
