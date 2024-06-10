import CartIcon from "./CartComponents/CartIcon";
import { useState } from "react";
import WishlistIcon from "./WishlistComponents/WishlistIcon";
import HamburgerButton from "../Reuseable-Components/Components-for-Navigation/HamburgerButton";
import NavSearchBar from "../Reuseable-Components/Components-for-Navigation/NavSearchBar";
import CloseButton from "../Reuseable-Components/Components-for-Navigation/CloseButton";
import MenuLinks from "./Menu-Links/MenuLinks";
import LogoImage from "../Reuseable-Components/Components-for-Navigation/LogoImage";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import LoginAndUserLayout from "./Login-and-UserDropdown/LoginAndUserLayout";

function MainNavBarLayout() {
  const [isShow, setIsShow] = useState(false);

  function handleShow() {
    setIsShow(!isShow);
  }

  return (
    <div>
      <header className="border-b bg-white font-sans min-h-[60px] px-10 py-3 relative tracking-wide relative z-50">
        <div className="flex flex-wrap items-center max-lg:gap-y-6 max-sm:gap-x-4">
          <LogoImage />
          <div
            id="collapseMenu"
            className={
              isShow
                ? ` lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`
                : `max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`
            }
          >
            <CloseButton onClick={handleShow} />
            <MenuLinks />
          </div>

          <div className="flex items-center ml-auto space-x-8">
            <WishlistIcon />
            <Link to="/cart/overview">
              <CartIcon />
            </Link>
            <LoginAndUserLayout />
            <HamburgerButton onClick={handleShow} />
          </div>
        </div>
        <NavSearchBar />
      </header>

      <Outlet />
      <Footer />
    </div>
  );
}

export default MainNavBarLayout;
