import { useDispatch, useSelector } from "react-redux";

import { fetchCategories } from "../../ReduxToolkits/Redux-features/CategoriesFeatures/FetchAllCategorySlice";
import { useEffect } from "react";
import AllCategoryProductPageUI from "./AllCategoryProductPageUI";
import Loader from "../../Reuseable-Components/Loader";

function AllCategoryPage() {
  const dispatch = useDispatch();
  const {
    categories,
    status: categoriesStatus,
    error: categoriesError,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    if (categoriesStatus === "idle") {
      dispatch(fetchCategories());
    }
  }, [categoriesStatus, dispatch]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (categoriesStatus === "failed") {
    return <div>Error fetching categories: {categoriesError}</div>;
  }

  return (
    <div className="my-10">
      <h2 className="m-5 text-4xl font-extrabold px-6 py-6 text-center mb-8 bg-gradient-to-tr from-blue-700 to-purple-400 text-white">
        Categories
      </h2>
      <div className="flex flex-wrap justify-center">
        {categories.map((category) => (
          <div key={category} className="m-4">
            <AllCategoryProductPageUI category={category} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCategoryPage;
