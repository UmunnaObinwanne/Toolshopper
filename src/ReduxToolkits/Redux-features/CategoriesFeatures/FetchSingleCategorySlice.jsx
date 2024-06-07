import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategoryProducts = createAsyncThunk(
  "categoryProducts/fetchCategoryProducts",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return { category, products: data };
  }
);

const categoryProductsSlice = createSlice({
  name: "categoryProducts",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload.products;
      })
      .addCase(fetchCategoryProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categoryProductsSlice.reducer;
