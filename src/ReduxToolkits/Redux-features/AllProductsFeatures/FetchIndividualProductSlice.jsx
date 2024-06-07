import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchIndividualProduct = createAsyncThunk(
  "product/fetchIndividualProduct",
  async (productId) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );

      if (!response.ok) {
        throw new Error("failed to fetch product");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error; // Just throw the error directly
    }
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    product: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIndividualProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIndividualProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload; // Directly assign the payload
      })
      .addCase(fetchIndividualProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default singleProductSlice.reducer;
