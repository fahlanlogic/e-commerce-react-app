import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  })
})

const loginReducer = createReducer({ status: false }, (builder) => {
  // eslint-disable-next-line no-unused-vars
  builder.addCase(login, (state, action) => {
    state.status = true;
  })
})

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  }
})
console.log("CREATE STORE: ", store.getState())

store.subscribe(() => {
  console.log("STORE ADDED: ", store.getState())
})

store.dispatch(login())
store.dispatch(addToCart({ id: 1, qty: 20 }));