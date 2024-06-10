// Improved WishlistDesignComponent

import { useDispatch } from "react-redux";
import { removeProductFromWishlist } from "../ReduxToolkits/WishlistFeatures/WishlistSlice";
import { addProductToCart } from "../ReduxToolkits/Redux-features/CartFeatures/CartSlice";

function WishlistDesignComponent({ item }) {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeProductFromWishlist({ id }));
  };

  const handleAddToCart = () => {
    dispatch(addProductToCart(item));
    handleRemove(item.id); // Pass the id parameter here
  };
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden my-4">
      <div className="flex justify-end p-4">
        <button
          onClick={() => handleRemove(item.id)}
          type="button"
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-red-600 transition duration-300 ease-in-out"
        >
          Remove
        </button>
      </div>
      <div className="p-4">
        <img
          src="https://readymadeui.com/images/coffee1.webp"
          alt="Product 1"
          className="h-48 w-full object-cover"
        />
        <h3 className="mt-2 text-lg font-bold text-gray-800">
          Espresso Elegante
        </h3>
        <h4 className="mt-2 text-lg text-gray-800 font-bold">
          $10 <span className="ml-2 text-gray-400 line-through">$15</span>
        </h4>
      </div>
      <div className="flex justify-end p-4">
        <button
          onClick={handleAddToCart}
          type="button"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default WishlistDesignComponent;
