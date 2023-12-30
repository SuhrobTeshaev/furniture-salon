import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { MyContextProvider } from "./Components/Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <MyContextProvider>
    <BrowserRouter>
      <App />
  </BrowserRouter>
   </MyContextProvider>
 
    
 
  
);
