import { createStore } from "redux";

//Reducer

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
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// Store
const store = createStore(cartReducer);
console.log(store.getState());
// Subscribe
store.subscribe(() => {
  const lengthStore = store.getState();
  console.log(lengthStore);
});
// Dispatch

const action1 = store.dispatch({
  type: "ADD_TO_CART",
  payload: { id: 2, qty: 10 },
});
