import React from 'react';
import './App.css';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
// import Feedback from './Components/feetback/Feetback';
import AppRoutes from './Components/routes/AppRoutes';


function App() {
  return (
    <div className="App">
		<Header/>
      <AppRoutes/>
    {/* <Feedback/> */}
	  <Footer/>
    </div>
  );
}

export default App;
