import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Feedback from './Components/feetback/Feetback';
import SingleProduct from './Components/Product/SingleProduct';
import Cart from './Components/Cart/Cart';
import Product from './Components/Product/Product';

function App() {
  return (
    <div className="App">
		<Header/>
    <Banner/>
    <SingleProduct/>
    <Feedback/>
    <Cart/>
    <Product/>
	  <Footer/>
    </div>
  );
}

export default App;
