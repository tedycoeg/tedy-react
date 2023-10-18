import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const cartAction = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(cartAction, (state, action) => {
    return [...state, action.payload]; // Return a new array with the updated state
  });
});

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(cartAction({ id: 1, qty: 20 }));
