import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const cartAction = createAction("ADD_TO_CART");
const loginAction = createAction("LOGIN");

// Redux
const cartReducer = createReducer([], (builder) => {
  builder.addCase(cartAction, (state, action) => {
    return [...state, action.payload];
  });
});

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(loginAction, (state, action) => {
    state.status = true;
  });
});

// STORE

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});
console.log("ON STORE", store.getState());

// SUBSCRIPTION

store.subscribe(() => {
  console.log(store.getState());
});

// DISPATCH
store.dispatch(cartAction({ id: 1, qty: 20 }));
store.dispatch(loginAction(loginAction()));
