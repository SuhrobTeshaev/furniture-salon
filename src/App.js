import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import SingleProduct from './Components/Product/SingleProduct';

function App() {
  return (
    <div className="App">
		<Header/>
    <Banner/>
    <SingleProduct/>
	  <Footer/>
    </div>
  );
}

export default App;
