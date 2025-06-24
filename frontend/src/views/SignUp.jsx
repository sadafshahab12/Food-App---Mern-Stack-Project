import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  useEffect(() => {
    document.title = "Sign Up | Food App";
  }, []);
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    location: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [fieldError, setFieldError] = useState({
    name: [],
    location: "",
    email: "",
    password: [], // For multiple password errors
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_BASE_URL}/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      }
    );

    const data = await response.json();
    console.log(data);

    if (!data.success) {
      const newError = {
        name: [],
        location: "",
        email: "",
        password: [],
      };

      data.errors.forEach((error) => {
        if (error.path === "name") {
          newError.name.push(error.msg);
        }
        if (error.path === "location") {
          newError.location = error.msg;
        }
        if (error.path === "email") {
          newError.email = error.msg;
        }
        if (error.path === "password") {
          newError.password.push(error.msg);
        }
      });

      setFieldError(newError);
    } else {
      // Reset form if successful
      setUserCredentials({
        name: "",
        location: "",
        email: "",
        password: "",
      });
      setFieldError({
        name: [],
        location: "",
        email: "",
        password: [],
      });
      toast.success("Account Created Successfully", {
        duration: 2000,
      });
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-center mt-20 items-center min-h-screen p-4">
      <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Join Our Food App
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Sign up to discover delicious meals and exclusive offers!
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={userCredentials.name}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 transition duration-200 ease-in"
            />

            {fieldError.name && (
              <ul className="text-red-600 text-sm mt-1 list-disc list-inside">
                {fieldError.name.map((err, idx) => (
                  <li key={idx} className="list-none">
                    {err}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Location Field */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter your location"
              value={userCredentials.location}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 transition duration-200 ease-in"
            />
            {fieldError.location && (
              <p className="text-red-600 text-sm mt-1">{fieldError.location}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={userCredentials.email}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 transition duration-200 ease-in"
            />
            {fieldError.email && (
              <p className="text-red-600 text-sm mt-1">{fieldError.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Create a password"
              value={userCredentials.password}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 transition duration-200 ease-in"
            />
            {showPassword ? (
              <FaRegEye
                size={22}
                className="absolute top-8 right-4 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaEyeSlash
                size={22}
                className="absolute top-8 right-4 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
            {/* Show multiple password errors */}
            {fieldError.password.length > 0 && (
              <ul className="text-red-600 text-sm mt-1 list-disc list-inside">
                {fieldError.password.map((err, idx) => (
                  <li className="list-none" key={idx}>
                    {err}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-slate-800 text-white p-2 rounded-md cursor-pointer hover:bg-slate-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Footer Links */}
        <div className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </div>
        <div className="text-center text-gray-500 text-sm mt-4">
          By signing up, you agree to our{" "}
          <Link to="/term" className="text-blue-600 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/policy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default SignUp;
