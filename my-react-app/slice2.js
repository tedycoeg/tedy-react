import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      return [...state, action.payload];
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("ON STORE", store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 20 }));
