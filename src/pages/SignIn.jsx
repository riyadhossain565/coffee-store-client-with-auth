import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 pb-12">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="text-3xl font-bold text-center rancho-font text-[#374151] mb-6">
          Sign In
        </h2>
        {/* {errorMessage && (
          <div className="mb-4 text-center text-red-500">{errorMessage}</div>
        )} */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-sm">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2  bg-[#D2B48C] rounded-lg focus:outline-none"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        {/* <div className="my-6 flex items-center">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="px-4 text-md text-gray-500">or</span>
        <div className="flex-1 h-px bg-gray-300"></div>
        </div> */}

        {/* google sign in */}
        {/* <p className="text-center ">
        <button onClick={handleGoogleSignIn} className="btn btn-outline">
          Sign in with Google
        </button>
        </p> */}

        {/* Register option */}
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>
            Don't have an account?
            <Link to="/signUp" className="text-[#331A15] hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
