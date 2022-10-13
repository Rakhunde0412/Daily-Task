import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { hidden: true, cartItems: 0, itemsInCart: [], quantity: 0, totalCount: 0 },
  reducers: {
    removeItem: (state, action) => {},
    removeAll: (state) => {
      state.cartItems = 0;
      state.itemsInCart = [];
      state.totalCount = 0;
    },
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    showCart: (state) => {
        state.hidden = !state.hidden;
      },
  },
});

export const { showCart, addToCart, removeAll, removeItem  } = cartSlice.actions;
export default cartSlice.reducer;
