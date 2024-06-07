import { Routes, Route } from "react-router-dom";
import MainNavBarLayout from "./NavigationBar-Components/MainNavBarLayout";
import FrontpageLayout from "./WebsiteFrontpageLayout/FrontpageLayout";
import AllCategoryPage from "./ProductsAndCategoriesPage/AllCategoryPage/AllCategoryPage";
import SingleCategoryPage from "./ProductsAndCategoriesPage/SingleCategoryProducts/SingleCategoryPage";
import FullProductsPage from "./ProductsAndCategoriesPage/AllProductsPages/FullProductsPage";
import SingleProductPage from "./ProductsAndCategoriesPage/SingleProductPage/SingleProductPage";
import { useSelector } from "react-redux";
import Loader from "./Reuseable-Components/Loader";
import CartOverview from "./CartComponents/CartOverview";

function App() {
  const categoriesStatus = useSelector((state) => state.categories.status);
  const productStatus = useSelector((state) => state.allProducts.status);

  const isLoading =
    categoriesStatus === "loading" || productStatus === "loading";

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<MainNavBarLayout />}>
          <Route index element={<FrontpageLayout />} />
          <Route path="/categories" element={<AllCategoryPage />} />
          <Route path="/category/:category" element={<SingleCategoryPage />} />
          <Route path="/products" element={<FullProductsPage />} />
          <Route path="/product/:productId" element={<SingleProductPage />} />
          <Route path="/cart/overview" element={<CartOverview />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
