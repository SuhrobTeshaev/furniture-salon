import React from 'react';

import {Routes, Route } from 'react-router-dom';
import { ROUTES } from '../../Routes';
import Home from '../Home/Home';
import Product from '../Product/Product';
import Cart from './../Cart/Cart';
import Favourites from './../Favourites/Favourites';
import SingleProduct from '../Product/SingleProduct';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}/>
        <Route path={ROUTES.CART} element={<Cart/>}/>
        <Route path={ROUTES.PRODUCTS} element={<SingleProduct/>}/>
        <Route path={ROUTES.PRODUCT} element={<Product/>}/>
        <Route path={ROUTES.FAVOURITE} element={<Favourites/>}/>
    </Routes>
  )
}

export default AppRoutes;