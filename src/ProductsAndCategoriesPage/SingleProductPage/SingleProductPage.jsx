import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchIndividualProduct } from "../../ReduxToolkits/Redux-features/AllProductsFeatures/FetchIndividualProductSlice";
import SingleProductPageUI from "./SingleProductPageUI";
import Loader from "../../Reuseable-Components/Loader";

const SingleProductPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const { product, status, error } = useSelector(
    (state) => state.singleProduct
  );

  useEffect(() => {
    if (productId) {
      dispatch(fetchIndividualProduct(productId));
    }
  }, [dispatch, productId]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return <div>{product && <SingleProductPageUI product={product} />}</div>;
};

export default SingleProductPage;
