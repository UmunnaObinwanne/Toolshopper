import { Link } from "react-router-dom";

function LogoImage() {
  return (
    <div>
      <Link to="/">
        <img
          src="https://readymadeui.com/readymadeui.svg"
          alt="logo"
          className="w-36"
        />
      </Link>
    </div>
  );
}

export default LogoImage;
