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

  const limitedProductListing = products.slice(0, 8); //limiting to just 8 products on the frontpage

  return (
    <div className="py-8">
      <div className="bg-gradient-to-r from-blue-700 to-[#B06AB3] font-sans px-6 py-12 m-8">
        <div className="container mx-auto flex flex-col justify-center items-center text-center">
          <h2 className="text-white sm:text-4xl text-3xl mb-4 text-3xl font-extrabold mb-8 text-orange-400">
            Discover Our New Collection
          </h2>
          <p className="text-white text-base text-center mb-8 text-xl">
            Elevate your style with our latest arrivals. Shop now and enjoy
            exclusive discounts!
          </p>
          <Link to="/products">
            <button
              type="button"
              className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 to-orange-600 hover:bg-orange-500 text-white text-sm text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>

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
