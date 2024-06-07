import RegularSearchBar from "../../Reuseable-Components/Non-Customized-Components/RegularSearchBar";

function Hero() {
  return (
    <div>
      <div className="font-sans text-white bg-[#333] px-6 py-12 overflow-hidden">
        <div className="max-w-7xl max-md:max-w-md mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="lg:text-5xl md:text-4xl text-3xl font-extrabold mb-4 lg:!leading-[55px]">
                Buy CUSTOM MADE Autographed Products from your FAVORITE
                CELEBRITY.
              </h2>
              <p className="mt-4 text-base leading-relaxed">
                Buy CUSTOM MADE PRODUCTS directly from celebrities with
                authentic autographs for less than $200. You can resell on other
                platforms for over $3000 and make profit. Explore our
                collections and plug yourself into a one-in-a-lifetime
                opportunity.
              </p>

              <div className="mt-5">
                <RegularSearchBar />
              </div>
            </div>
            <div>
              <img
                src="https://readymadeui.com/readymadeui_banner.webp"
                className="shrink-0 w-full h-full md:skew-x-[-26deg] md:-rotate-2 rounded-md object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
