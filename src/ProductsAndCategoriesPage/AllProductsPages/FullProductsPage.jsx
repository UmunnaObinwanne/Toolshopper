import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./../../ReduxToolkits/Redux-features/AllProductsFeatures/FetchProductsSlice";
import ProductPageUI from "./ProductPageUI";
import Loader from "../../Reuseable-Components/Loader";
import PromotionalBanner from "../../Reuseable-Components/PromotionalBanners/PromotionalBanner";

function FullProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const status = useSelector((state) => state.allProducts.status);
  const error = useSelector((state) => state.allProducts.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error fetching products: {error}</div>;
  }

  return (
    <>
      <PromotionalBanner />
      <div className="py-8">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductPageUI key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default FullProductsPage;
