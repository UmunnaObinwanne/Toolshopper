import { useState } from "react";

function RegularSearchBar() {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with query:", query);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex rounded-full border-2 border-black-200 overflow-hidden max-w-md  font-[sans-serif]"
      >
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="What are you looking for..."
          className="w-full outline-none bg-white text-black text-sm px-5 py-3" // Changed text color to black
        />
        <button
          type="submit" // Changed to submit type
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="18px"
            className="fill-white"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default RegularSearchBar;
