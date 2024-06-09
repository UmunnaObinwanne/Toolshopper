import { useNavigate } from "react-router-dom";

function NoItemCartMessgae() {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate(-1); // This navigates back to the previous page
  };

  return (
    <div>
      <div className="bg-white text-[#333] font-[sans-serif]">
        <div className="max-w-lg mx-auto p-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Nothing in your Cart</h2>
          <p className="text-base">
            Go back to shopping or input your email below to get notified of our
            discounts and promotions
          </p>
          <div className="mt-8 flex items-center bg-gray-100 rounded overflow-hidden sm:w-11/12 mx-auto">
            <input
              name="name"
              type="text"
              className="flex-1 w-full bg-transparent text-sm px-4 py-3 outline-none"
              placeholder="Enter email"
            />
            <button
              type="button"
              className="w-max px-6 py-3 text-sm tracking-wider font-semibold outline-none border-none bg-[#333] text-white hover:bg-[#111] transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default NoItemCartMessgae;
