import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItemDisplay from "./CartItemDisplay";

function CartOverview() {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate(-1); // This navigates back to the previous page
  };

  const combinedCartItems = useSelector((state) => state.cart.cartItems);

  const totalProductsPrice = combinedCartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const shippingFee = 0;
  const tax = 0.5 * totalProductsPrice;
  const totalPayablePrice = totalProductsPrice + shippingFee + tax;

  return (
    <div className="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-extrabold text-gray-800">Your Cart</h1>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="md:col-span-2 space-y-4">
          {combinedCartItems.map((item, index) => (
            <CartItemDisplay key={index} item={item} />
          ))}
        </div>

        <div className="bg-white rounded p-4 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
          <ul className="text-gray-800 space-y-4">
            <li className="flex flex-wrap gap-4 text-sm">
              Subtotal
              <span className="ml-auto font-bold">{totalProductsPrice}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Shipping <span className="ml-auto font-bold">{shippingFee}</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Tax <span className="ml-auto font-bold">{tax}</span>
            </li>
            <hr className="border-gray-300" />
            <li className="flex flex-wrap gap-4 text-sm font-bold">
              Total <span className="ml-auto">{totalPayablePrice}</span>
            </li>
          </ul>

          <div className="mt-8 space-y-2">
            <button
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded"
            >
              Buy Now
            </button>
            <button
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300 rounded"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <img
              src="https://readymadeui.com/images/master.webp"
              alt="card1"
              className="w-10 object-contain"
            />
            <img
              src="https://readymadeui.com/images/visa.webp"
              alt="card2"
              className="w-10 object-contain"
            />
            <img
              src="https://readymadeui.com/images/american-express.webp"
              alt="card3"
              className="w-10 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartOverview;
