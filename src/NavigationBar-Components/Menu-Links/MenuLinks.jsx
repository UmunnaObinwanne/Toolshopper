function MenuLinks() {
  return (
    <div>
      <ul className="lg:flex lg:gap-x-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
        <li className="mb-6 hidden max-lg:block">
          <a href="#">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-36"
            />
          </a>
        </li>
        <li className="max-lg:border-b max-lg:py-3">
          <a
            href="#"
            className="hover:text-[#007bff] text-[15px] text-[#007bff] block font-bold"
          >
            Home
          </a>
        </li>
        <li className="group max-lg:border-b max-lg:py-3 relative">
          <a
            href="#"
            className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] lg:hover:fill-[#007bff] block"
          >
            Pages
          </a>
        </li>
        <li className="group max-lg:border-b max-lg:py-3 relative">
          <a
            href="#"
            className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] lg:hover:fill-[#007bff] block"
          >
            Blog
          </a>
        </li>
        <li className="max-lg:border-b max-lg:py-3">
          <a
            href="#"
            className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
          >
            Team
          </a>
        </li>
        <li className="max-lg:border-b max-lg:py-3">
          <a
            href="#"
            className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
          >
            About
          </a>
        </li>
        <li className="max-lg:border-b max-lg:py-3">
          <a
            href="#"
            className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
          >
            Contact
          </a>
        </li>
        <li className="max-lg:border-b max-lg:py-3">
          <a
            href="#"
            className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
          >
            Source
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MenuLinks;
