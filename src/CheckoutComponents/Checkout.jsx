import { useState } from "react";
import { useSelector } from "react-redux";
import CheckoutProductDisplay from "./CheckoutProductDisplay";

function Checkout() {
  const combinedCartItems = useSelector((state) => state.cart.cartItems);

  const totalProductsPrice = combinedCartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const shippingFee = 0;
  const tax = 0.5 * totalProductsPrice;
  const totalPayablePrice = totalProductsPrice + shippingFee + tax;
  const roundupTotalPayablePrice = totalPayablePrice.toFixed(2);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    paymentMethod: "card",
    cardName: "",
    cardNumber: "",
    exp: "",
    cvv: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formValues);
  };

  return (
    <div className="font-[sans-serif] bg-white">
      <div className="max-lg:max-w-xl mx-auto w-full">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 max-lg:order-1 p-6 !pr-0 max-w-4xl mx-auto w-full">
            <div className="text-center max-lg:hidden">
              <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b border-gray-800 pb-1">
                Checkout
              </h2>
            </div>

            <form className="lg:mt-16" onSubmit={handleSubmit}>
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  Shipping info
                </h2>
                <div className="grid sm:grid-cols-2 gap-8 mt-8">
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <input
                    type="text"
                    name="street"
                    value={formValues.street}
                    onChange={handleChange}
                    placeholder="Street address"
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <input
                    type="text"
                    name="city"
                    value={formValues.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <input
                    type="text"
                    name="state"
                    value={formValues.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <input
                    type="number"
                    name="postalCode"
                    value={formValues.postalCode}
                    onChange={handleChange}
                    placeholder="Postal code"
                    className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                </div>
              </div>

              <div className="mt-16">
                <h2 className="text-xl font-bold text-gray-800">
                  Payment method
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formValues.paymentMethod === "card"}
                      onChange={handleChange}
                      className="w-5 h-5 cursor-pointer"
                      id="card"
                    />
                    <label
                      htmlFor="card"
                      className="ml-4 flex gap-2 cursor-pointer"
                    >
                      <img
                        src="https://readymadeui.com/images/visa.webp"
                        className="w-12"
                        alt="card1"
                      />
                      <img
                        src="https://readymadeui.com/images/american-express.webp"
                        className="w-12"
                        alt="card2"
                      />
                      <img
                        src="https://readymadeui.com/images/master.webp"
                        className="w-12"
                        alt="card3"
                      />
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formValues.paymentMethod === "paypal"}
                      onChange={handleChange}
                      className="w-5 h-5 cursor-pointer"
                      id="paypal"
                    />
                    <label
                      htmlFor="paypal"
                      className="ml-4 flex gap-2 cursor-pointer"
                    >
                      <img
                        src="https://readymadeui.com/images/paypal.webp"
                        className="w-20"
                        alt="paypalCard"
                      />
                    </label>
                  </div>
                </div>

                {formValues.paymentMethod === "card" && (
                  <div className="grid gap-8 mt-8">
                    <input
                      type="text"
                      name="cardName"
                      value={formValues.cardName}
                      onChange={handleChange}
                      placeholder="Cardholder's Name"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                    />
                    <div className="flex bg-white border-b focus-within:border-gray-800 overflow-hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 ml-3"
                        viewBox="0 0 291.764 291.764"
                      >
                        <path fill="#2394bc" d="..." />
                      </svg>
                      <input
                        type="number"
                        name="cardNumber"
                        value={formValues.cardNumber}
                        onChange={handleChange}
                        placeholder="Card Number"
                        className="px-2 pb-2 bg-white text-gray-800 w-full text-sm outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <input
                        type="number"
                        name="exp"
                        value={formValues.exp}
                        onChange={handleChange}
                        placeholder="EXP."
                        className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                      />
                      <input
                        type="number"
                        name="cvv"
                        value={formValues.cvv}
                        onChange={handleChange}
                        placeholder="CVV"
                        className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none"
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="rememberMe"
                    type="checkbox"
                    checked={formValues.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-3 block text-sm">
                    I accept the{" "}
                    <a
                      href="javascript:void(0);"
                      className="text-blue-600 font-semibold hover:underline ml-1"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="min-w-[150px] px-6 py-3.5 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-900"
                >
                  {`Confirm payment ${roundupTotalPayablePrice}`}
                </button>
              </div>
            </form>
          </div>

          <CheckoutProductDisplay
            combinedCartItems={combinedCartItems}
            roundupTotalPayablePrice={roundupTotalPayablePrice}
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
