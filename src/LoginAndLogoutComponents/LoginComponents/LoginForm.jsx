// LoginForm.js
import { useDispatch } from "react-redux";
import { signInUser } from "../../ReduxToolkits/Redux-features/FirebaseAuthFeatures/AuthSlice";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SignInDangerBanner from "../../Reuseable-Components/AlertBanner/SignInDangerBanner";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Default to home if no previous location
  const from = location.state?.from || "/";

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signInUser({ email: formValues.email, password: formValues.password })
    ).then((result) => {
      if (signInUser.fulfilled.match(result)) {
        setIsErrorMessage(false);
        navigate(from);
      } else {
        setIsErrorMessage(true);
        if (result.payload === "Firebase: Error (auth/invalid-credential).") {
          setErrorMessage("email or password is invalid");
          console.log(errorMessage);
        }
      }
    });
  };

  return (
    <>
      {isErrorMessage && (
        <SignInDangerBanner
          errorMessage={errorMessage}
          isErrorMessage={isErrorMessage}
          className="m-15"
        />
      )}
      <div className="bg-white font-[sans-serif] text-white min-h-screen flex flex-col items-center justify-center py-6 px-4 relative">
        <div className="max-w-lg w-full border py-12 px-8 rounded-md bg-gray-800 relative z-50">
          <h2 className="text-yellow-400 text-3xl font-bold">Sign in</h2>
          <p className="text-sm mt-4">
            Sign in to your account and explore a world of possibilities. Your
            journey begins here.
          </p>
          <form className="mt-10 space-y-8" onSubmit={handleSubmit}>
            <div>
              <label className="text-sm mb-2 block">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                  className="w-full text-sm bg-transparent border-2 border-gray-300 focus:border-yellow-400 px-4 py-3 rounded-md outline-none"
                  placeholder="Enter email"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-4"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-6">
              <label className="text-sm mb-2 block">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  value={formValues.password}
                  onChange={handleChange}
                  required
                  className="w-full text-sm bg-transparent border-2 border-gray-300 focus:border-yellow-400 px-4 py-3 rounded-md outline-none"
                  placeholder="Enter password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 !mt-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={formValues.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-md"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  Remember me
                </label>
              </div>
              <div>
                <a
                  href="javascript:void(0);"
                  className="text-sm text-yellow-400 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="!mt-10">
              <button
                type="submit"
                className="w-full py-2.5 px-4 text-base font-semibold rounded-md text-gray-800 bg-yellow-400 hover:bg-yellow-500 focus:outline-none"
              >
                Log in
              </button>
              <p className="text-sm mt-8 text-center">
                Don't have an account
                <a
                  href="javascript:void(0);"
                  className="text-yellow-400 hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </a>
              </p>
            </div>
          </form>
        </div>
        <img
          src="https://readymadeui.com/bg-effect.svg"
          className="absolute inset-0 w-full h-full z-0"
          alt="background effect"
        />
      </div>
    </>
  );
}

export default LoginForm;
