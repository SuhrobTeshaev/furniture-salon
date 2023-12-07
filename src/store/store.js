import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./futuries/ProductSlice";

export const  store = configureStore({
reducer:{
products:productSlice
}
});
