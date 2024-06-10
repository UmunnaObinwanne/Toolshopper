import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./Redux-features/CategoriesFeatures/FetchAllCategorySlice";
import categoryProductsReducer from "./Redux-features/CategoriesFeatures/FetchSingleCategorySlice";
import allProductsReducer from "./Redux-features/AllProductsFeatures/FetchProductsSlice";
import singleProductReducer from "./Redux-features/AllProductsFeatures/FetchIndividualProductSlice";
import cartReducer from "./Redux-features/CartFeatures/CartSlice";
import authReducer from "./Redux-features/FirebaseAuthFeatures/AuthSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import wishlistReducer from "./WishlistFeatures/WishlistSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "auth",
    "cart",
    "categories",
    "categoryProducts",
    "singleProduct",
    "wishlist",
  ],
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
  categoryProducts: categoryProductsReducer,
  allProducts: allProductsReducer,
  singleProduct: singleProductReducer,
  cart: cartReducer,
  auth: authReducer,
  wishlist: wishlistReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
