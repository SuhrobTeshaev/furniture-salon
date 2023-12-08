import React from 'react'
import Products from './../Product/Products';
import Banner from './../Banner/Banner';
const Home = () => {
  return (
    <div className='home'>
        <Banner/>
        <Products/>
        
    </div>
  )
}

export default Home;