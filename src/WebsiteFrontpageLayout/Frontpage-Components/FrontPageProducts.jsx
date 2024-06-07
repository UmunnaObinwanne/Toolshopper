import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../ReduxToolkits/Redux-features/AllProductsFeatures/FetchProductsSlice";
import ProductPageUI from "../../ProductsAndCategoriesPage/AllProductsPages/ProductPageUI";
import { Link } from "react-router-dom";

const FrontPageProducts = () => {
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
    return <div>Loading Products...</div>;
  }

  if (status === "failed") {
    return <div>Error fetching products: {error}</div>;
  }

  const limitedProductListing = products.slice(0, 8);

  return (
    <div className="py-8">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
        Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {limitedProductListing.map((product) => (
          <ProductPageUI key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center m-8">
        <Link to="/products">
          <button
            type="button"
            className="px-5 py-2.5 flex justify-center items-center text-sm tracking-wider font-semibold outline-none text-white bg-blue-500 hover:bg-blue-600 rounded"
          >
            View All Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FrontPageProducts;
