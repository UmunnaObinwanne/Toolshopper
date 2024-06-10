// WishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialStore = {
  wishlistItems: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialStore,
  reducers: {
    addProductToWishlist(state, action) {
      const product = action.payload;
      const existingProduct = state.wishlistItems.find(
        (item) => item.id === product.id
      );
      if (!existingProduct) {
        state.wishlistItems.push(product);
      }
    },
    removeProductFromWishlist(state, action) {
      state.wishlistItems = state.wishlistItems.filter(
        (product) => product.id !== action.payload.id
      );
    },
    clearWishlist: (state) => {
      state.wishlistItems = [];
    },
  },
});

export const { addProductToWishlist, removeProductFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
