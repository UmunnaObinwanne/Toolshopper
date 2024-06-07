import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryProducts } from "../../ReduxToolkits/Redux-features/CategoriesFeatures/FetchSingleCategorySlice";
//import SingleCategoryPageUI from "./SingleCategoryPageUI";
import Loader from "../../Reuseable-Components/Loader";
import ProductPageUI from "../AllProductsPages/ProductPageUI";

const SingleCategoryPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.categoryProducts.products);
  const status = useSelector((state) => state.categoryProducts.status);
  const error = useSelector((state) => state.categoryProducts.error);

  useEffect(() => {
    dispatch(fetchCategoryProducts(category));
  }, [dispatch, category]);

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
    <div className="mx-5 my-5">
      <div>
        <Link
          to="/"
          className="inline-block mb-4 text-blue-500 hover:text-blue-700 transition-colors"
        >
          &larr; Go back to home
        </Link>
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8 my-10">
            Products in {category}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductPageUI key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SingleCategoryPage;
