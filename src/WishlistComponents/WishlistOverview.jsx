import { useSelector } from "react-redux";
import WishlistDesignComponent from "./WishlistDesignComponent";

function WishlistOverview() {
  const combinedWishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  return (
    <div className="wishlist-grid">
      <div className="wishlist-header">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
          Wishlist
        </h2>
      </div>
      <div className="wishlist-items auto-cols-max grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-4">
        {combinedWishlistItems.map((item) => (
          <WishlistDesignComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default WishlistOverview;
