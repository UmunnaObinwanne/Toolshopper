import { Routes, Route } from "react-router-dom";
import MainNavBarLayout from "./NavigationBar-Components/MainNavBarLayout";
import FrontpageLayout from "./WebsiteFrontpageLayout/FrontpageLayout";
import AllCategoryPage from "./ProductsAndCategoriesPage/AllCategoryPage/AllCategoryPage";
import SingleCategoryPage from "./ProductsAndCategoriesPage/SingleCategoryProducts/SingleCategoryPage";
import FullProductsPage from "./ProductsAndCategoriesPage/AllProductsPages/FullProductsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainNavBarLayout />}>
          <Route index element={<FrontpageLayout />} />
          <Route path="/categories" element={<AllCategoryPage />} />
          <Route path="/category/:category" element={<SingleCategoryPage />} />
          <Route path="/products" element={<FullProductsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
