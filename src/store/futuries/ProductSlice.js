import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

 

 const initialState = {
    product:[],
 }

 const productsState = createAsyncThunk('products/productsState', async () => {
    
    const res = await axios.get('https://fakestoreapi.com/products')
    return res.data
    
  })

 export const productSlice = createSlice({
    name:'product',
    cart:[],
    initialState,
    reducers:{
       addItemToCart(state,{payload})  {
        let newCart = [...state.cart]
        state.cart.find(({id}) => id === payload.id);
         state.cart = newCart;
        },
        removeItemCard(state,{payload}) {
            state.cart = state.cart.filter(({id})=>id !== payload.id)
        }
    },
    extraReducers: (builder) => {
        
        builder
          .addCase(productsState.pending, (state) => {
            state.status = 'loading'
          })
          
          .addCase(productsState.fulfilled, (state, action) => {
            
            state.status = 'succeeded'
          })
          .addCase(productsState.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error
          })
      },
 })

 export const { addItemToCart, removeItemCard } = productSlice.actions
 export default productSlice.reducer