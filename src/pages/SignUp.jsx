import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Submitted", email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const createAt = result?.user?.metadata?.creationTime;
        const newUser = { name, email, createAt };

        // save new info to the database
        fetch("https://coffee-store-server-omega-inky.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("user create to the db", data);
            }
          });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 pb-12">
        <div className="w-full max-w-md p-8 bg-white rounded shadow-md my-8">
          <h2 className="text-2xl font-bold text-center rancho-font text-[#374151] mb-6">
            Register Now!
          </h2>
          <form onSubmit={handleSignUp}>
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
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

            {/* Photo URL Input */}
            {/* <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Photo URL
              </label>
              <input
                type="url"
                name="image"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter photo URL"
                required
              />
            </div> */}

            {/* Password Input */}

            <div className="mb-6 relative">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                // type={showPassword ? "text" : "password"}
                type="password"
                name="password"
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                required
              />
              {/* <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-9 right-3 text-gray-500 hover:text-blue-500 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button> */}
            </div>

            {/* Password Error Message */}

            {/* {passwordError && (
            <div className="text-red-500 text-sm mb-4">{passwordError}</div>
          )} */}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-[#D2B48C] rounded-lg focus:outline-none"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          {/* <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-4 text-md text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div> */}

          {/* google sign up */}
          {/* <p className="text-center ">
            <button onClick={handleGoogleSignIn} className="btn btn-outline">
              Sign up with Google
            </button>
          </p> */}

          {/* Link to Login Page */}
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              Already have an account?{" "}
              <Link to="/signIn" className="text-[#331A15]  hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
