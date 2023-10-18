// reducer

import { createStore } from "redux";

const cartReducer = (
  state = {
    cart: [{ id: 1, qty: 20 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        // payload adalah nama data nya
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store
const store = createStore(cartReducer);
console.log(store.getState());

// subcribe
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch
// Ketika Diberikan Action
const action1 = store.dispatch({
  type: "ADD_TO_CART",
  payload: { id: 2, qty: 10 },
});
