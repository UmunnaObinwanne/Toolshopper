import { useDispatch, useSelector } from "react-redux";

import { fetchCategories } from "../../ReduxToolkits/Redux-features/CategoriesFeatures/FetchAllCategorySlice";
import { useEffect } from "react";
import AllCategoryProductPageUI from "./AllCategoryProductPageUI";

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

  if (categoriesStatus === "loading") {
    return <div>Loading categories...</div>;
  }

  if (categoriesStatus === "failed") {
    return <div>Error fetching categories: {categoriesError}</div>;
  }

  return (
    <div className="my-10">
      <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
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
