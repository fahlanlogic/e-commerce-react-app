import { legacy_createStore } from "redux";

// reducer
const cartReducer = (
  state = {
    cart: [{
      id: 1,
      qty: 1,
    }],
  }, 
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART": 
      return {
        ...state, cart: [...state.cart, action.payload], 
      }
    default: 
      return state
  }
}

// store
const store = legacy_createStore(cartReducer);
console.log("Oncreate store: ", store.getState())

// subscribe
store.subscribe(() => {
  console.log("Store Added: ", store.getState())
})

// dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 1 } }
store.dispatch(action1)