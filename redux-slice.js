import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload)
    }
  },
})

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  }
})
console.log("ONCREATE STORE: ", store.getState())
store.subscribe(() => {
  console.log("STORE ADDED: ", store.getState())
})

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 10 }))
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 20 }))