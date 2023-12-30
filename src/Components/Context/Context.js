import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const useMyContext = () => {
  return useContext(MyContext);
};

let initialState = [];

try {
  const item = window.localStorage.getItem("cartItems");
  initialState = item ? JSON.parse(item) : []
} catch (error) {
}

export const MyContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const allObj = {
    cart,
    setCart,
  };
  return <MyContext.Provider value={allObj}>{children}</MyContext.Provider>;
};
