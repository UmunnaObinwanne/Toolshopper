// SignUpForm.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../ReduxToolkits/Redux-features/FirebaseAuthFeatures/AuthSlice";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser(formValues));
    navigate("/");
  };

  return (
    <div className="bg-white font-[sans-serif] text-white min-h-screen flex flex-col items-center justify-center py-6 px-4 relative">
      <div className="max-w-lg w-full border py-12 px-8 rounded-md bg-gray-800 relative z-50">
        <h2 className="text-yellow-400 text-3xl font-bold">Sign Up</h2>
        <p className="text-sm mt-4">
          Sign up to create an account and start your journey.
        </p>
        <form className="mt-10 space-y-8" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm mb-2 block">Full Name</label>
            <div className="relative flex items-center">
              <input
                name="fullName"
                type="text"
                value={formValues.fullName}
                onChange={handleChange}
                required
                className="w-full text-sm bg-transparent border-2 border-gray-300 focus:border-yellow-400 px-4 py-3 rounded-md outline-none"
                placeholder="Enter full name"
              />
            </div>
          </div>
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
            </div>
          </div>
          <div className="!mt-10">
            <button
              type="submit"
              className="w-full py-2.5 px-4 text-base font-semibold rounded-md text-gray-800 bg-yellow-400 hover:bg-yellow-500 focus:outline-none"
            >
              Sign Up
            </button>
            <p className="text-sm mt-8 text-center">
              Already have an account?
              <a
                href="/login"
                className="text-yellow-400 hover:underline ml-1 whitespace-nowrap"
              >
                Log in here
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
  );
}

export default SignUpForm;
