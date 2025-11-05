import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feacture/cartSlice.js";

const savedCart = JSON.parse(localStorage.getItem("cart"));
const initialCartState =
  savedCart && savedCart.cartItems ? savedCart : { cartItems: [] };

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: initialCartState,
  },
});

Store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(Store.getState().cart));
});