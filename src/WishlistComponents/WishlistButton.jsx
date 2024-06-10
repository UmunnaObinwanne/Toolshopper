import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  addProductToWishlist,
  removeProductFromWishlist,
} from "../ReduxToolkits/WishlistFeatures/WishlistSlice";

function WishlistButton({ product }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlistItems);

  const [added, setAdded] = useState(false);

  useEffect(() => {
    const isProductInWishlist = wishlist.find((item) => item.id === product.id);
    setAdded(isProductInWishlist ? true : false);
  }, [wishlist, product.id]);

  const handleToggleWishlist = () => {
    if (added) {
      dispatch(removeProductFromWishlist(product));
      console.log(`Product ${product.id} is removed from wishlist`);
    } else {
      dispatch(addProductToWishlist(product));
      console.log(`Product ${product.id} is added from wishlist`);
    }
    setAdded(!added);
  };

  return (
    <div>
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4 ${
          added ? "bg-red-600" : "bg-gray-100"
        }`}
        onClick={handleToggleWishlist}
      >
        {added ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            className="fill-white inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            className="fill-gray-800 inline-block"
            viewBox="0 0 64 64"
          >
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"
            ></path>
          </svg>
        )}
      </div>
    </div>
  );
}

export default WishlistButton;
