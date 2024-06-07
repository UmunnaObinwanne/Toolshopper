import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      console.log(data);
      const categories = Array.from(new Set(data));
      console.log("Categories:", categories);
      return categories;
    } catch (error) {
      console.error("Error fetching categories:", error.message);
      throw error;
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
