import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice
  }
})
console.log("ONCREATE STORE: ", store.getState())
store.subscribe(() => {
  console.log("STORE CHANGED: ", store.getState())
})

export default store;