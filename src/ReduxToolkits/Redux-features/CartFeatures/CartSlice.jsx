import { createSlice } from "@reduxjs/toolkit";

const initialStore = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialStore,
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    updateProductQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.cartItems.find((item) => item.id === id);

      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
    },
    removeProductFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addProductToCart,
  updateProductQuantity,
  removeProductFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
