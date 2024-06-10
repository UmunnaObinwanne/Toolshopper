import { useState } from "react";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOutUser } from "./../../ReduxToolkits/Redux-features/FirebaseAuthFeatures/AuthSlice";

function UserDropdown({ user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showUser, setShowUser] = useState(false);

  function handleShowUser() {
    setShowUser(!showUser);
  }

  function handleSignOut() {
    dispatch(signOutUser());
    navigate("/");
  }
  return (
    <div>
      <div
        onClick={handleShowUser}
        className="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')]"
      >
        {showUser && (
          <div className="drop-down  w-48 overflow-hidden bg-white rounded-md shadow absolute top-12 right-3">
            <ul>
              <li className="px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                <span>{`Welcome ${user.displayName}`} </span>
              </li>
              <li className="px-3  py-3  text-sm font-medium flex items-center space-x-2 hover:bg-slate-400">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </span>
                <Link to="/wishlist">
                  <span> Wishlist </span>
                </Link>
              </li>
              <li
                className="px-3  py-3 text-sm font-medium flex items-center space-x-2 hover:bg-slate-400"
                onClick={handleSignOut}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </span>
                <span> Logout </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDropdown;
