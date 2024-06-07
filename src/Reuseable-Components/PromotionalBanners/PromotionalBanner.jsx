function PromotionalBanner() {
  return (
    <div>
      <div className="bg-gray-100 font-[sans-serif] relative max-w-4xl mx-auto rounded overflow-hidden mt-8">
        <div className="grid sm:grid-cols-2 gap-6 max-sm:gap-12 py-12 px-6">
          <div className="bg-gradient-to-tr from-[#273284b6] to-[#1e1e60] px-4 py-8 text-center rounded-[30px] w-full max-w-[300px] h-max skew-x-[10deg] mx-auto shadow-lg shadow-purple-400">
            <h6 className="text-gray-300 text-4xl">Big</h6>
            <h2 className="text-white text-7xl font-bold mt-0.5">Sale!</h2>
            <p className="text-gray-300 text-base mt-2">
              Arriving this weekend
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-bold text-4xl text-orange-500">
              Special Offer
            </h3>
            <h6 className="text-2xl text-orange-500 mt-0.5">
              Limited Time Deal
            </h6>
            <p className="text-gray-800 text-base mt-4">
              Discover amazing discounts and deals. Don't miss out on our
              exclusive offers available for a limited time.
            </p>

            <button
              type="button"
              className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 to-orange-600 hover:bg-orange-500 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-lg w-max mt-8"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromotionalBanner;
