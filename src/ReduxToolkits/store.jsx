import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./Redux-features/CategoriesFeatures/FetchAllCategorySlice";
import categoryProductsReducer from "./Redux-features/CategoriesFeatures/FetchSingleCategorySlice";
import allProductsReducer from "./Redux-features/AllProductsFeatures/FetchProductsSlice";
import singleProductReducer from "./Redux-features/AllProductsFeatures/FetchIndividualProductSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    categoryProducts: categoryProductsReducer,
    allProducts: allProductsReducer,
    singleProduct: singleProductReducer,
    // Add other reducers here if any
  },
});

export default store;
