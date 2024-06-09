import { Link } from "react-router-dom";

const categoryImages = {
  electronics:
    "https://www.ogeninfo.com/blog/wp-content/uploads/2017/02/ecommerce-3-2-22-16-1170x724-768x475.jpg",
  jewelery:
    "https://th.bing.com/th/id/R.173b5f628dbb5c7dd0ea49815434611f?rik=MS%2fPmsOVZ7ling&pid=ImgRaw&r=0",
  "men's clothing":
    "https://cdn.mos.cms.futurecdn.net/QTKivXFYa2ZCRQF9eScMGF-1200-80.jpg",
  "women's clothing":
    "https://ae01.alicdn.com/kf/HTB1r600KXXXXXXnXpXXq6xXFXXXz/2-piece-Embroidery-Dress-2016-new-Spring-High-quality-fashion-Women-Clothes-set-XL-XXXL-size.jpg",
  // Add more categories and their images as needed
};

function AllCategoryProductPageUI({ category }) {
  const imageUrl =
    categoryImages[category] || "https://via.placeholder.com/300?text=No+Image";
  return (
    <>
      <Link to={`/category/${category}`}>
        <div className="flex flex-row">
          <div className="flex-row">
            <div className="bg-white flex flex-col h-full w-80 border border-gray-300 rounded-lg">
              <div className="w-full h-[250px] overflow-hidden">
                <img
                  src={imageUrl}
                  alt="food1"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 text-center flex-1">
                <h3 className="text-lg font-bold text-gray-800">{category}</h3>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default AllCategoryProductPageUI;
