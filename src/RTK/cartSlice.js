import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.itemCount++;
      } else {
        action.payload.itemCount++;
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.itemCount > 1) {
          item.itemCount--;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
    addItemToCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      const itemCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (itemCart) {
        if (item) itemCart.itemCount = item.itemCount;
        else state.cartItems = [...state.items];
      } else if (item) state.cartItems.push(item);
    },
    addCartValue: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      const itemCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      item.itemCount++;
      itemCart.itemCount++;
    },
    removeCartValue: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      const itemCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item && itemCart) {
        if (item.itemCount > 1 && itemCart.itemCount > 1) {
          item.itemCount--;
          itemCart.itemCount--;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  addItemToCart,
  addCartValue,
  removeCartValue,
  example,
} = cartSlice.actions;
export default cartSlice.reducer;
