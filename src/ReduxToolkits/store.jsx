import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./Redux-features/CategoriesFeatures/FetchAllCategorySlice";
import categoryProductsReducer from "./Redux-features/CategoriesFeatures/FetchSingleCategorySlice";
import allProductsReducer from "./Redux-features/AllProductsFeatures/FetchProductsSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    categoryProducts: categoryProductsReducer,
    allProducts: allProductsReducer,
    // Add other reducers here if any
  },
});

export default store;
