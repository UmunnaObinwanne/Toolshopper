function CheckoutProductDisplay({
  combinedCartItems,
  roundupTotalPayablePrice,
}) {
  return (
    <div className="bg-gray-100 lg:h-screen lg:sticky lg:top-0">
      <div className="relative h-full">
        <div className="p-6 lg:overflow-auto lg:h-[calc(100vh-60px)] max-lg:mb-8">
          <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
          <div className="space-y-8 mt-8">
            {combinedCartItems.map((item, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <div className="max-w-[170px] p-4 shrink-0 bg-gray-200 rounded-lg">
                  <img
                    src={item.image}
                    className="w-full object-contain"
                    alt={`Product ${index + 1}`}
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-base text-gray-800 font-bold">
                    {item.name}
                  </h3>
                  <ul className="text-sm text-gray-800 space-y-2 mt-2">
                    <li className="flex flex-wrap gap-4">
                      Quantity <span className="ml-auto">{item.quantity}</span>
                    </li>
                    <li className="flex flex-wrap gap-4">
                      Total Price
                      <span className="ml-auto">
                        ${item.price * item.quantity}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:absolute lg:left-0 lg:bottom-0 bg-gray-200 w-full p-4">
          <h4 className="flex flex-wrap gap-4 text-base text-gray-800 font-bold">
            Total <span className="ml-auto">${roundupTotalPayablePrice}</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProductDisplay;
