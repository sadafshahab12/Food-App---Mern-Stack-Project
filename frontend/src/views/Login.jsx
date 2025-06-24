import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [fieldError, setFieldError] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // it is post method with url we have to send body , data  coming from user through this form
    const response = await fetch(`${import.meta.env.VITE_REACT_BACKEND_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userCredentials.email,
        password: userCredentials.password,
      }),
    });
    const data = await response.json();

    if (!data.success) {
      const newError = { email: "", password: "" };

      if (data.errors && Array.isArray(data.errors)) {
        data.errors.forEach((error) => {
          console.log(error);
          if (error.path === "password") {
            newError.password = error.msg;
          }
        });
      } else {
        newError.email = data.errors;
      }
      setFieldError(newError);
    } else {
      localStorage.setItem("userEmail", userCredentials.email);
      localStorage.setItem("authToken", data.authToken);
      toast.success("Login Successfully!", {
        duration: 2000,
      });
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
    setFieldError((prevError) => ({
      ...prevError,
      [name]: "",
    }));
  };
  return (
    <div className=" flex justify-center my-8 items-center min-h-screen p-4">
      <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Log in to explore delicious meals and exclusive offers!
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
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
              value={userCredentials.email}
              placeholder="Enter your email"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 transition duration-200 ease-in"
              onChange={handleChange}
            />
            {fieldError.email && (
              <p className="text-red-600 text-sm mt-1">{fieldError.email}</p>
            )}
          </div>
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
              value={userCredentials.password}
              placeholder="Enter your password"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 transition duration-200 ease-in"
              onChange={handleChange}
            />
            {showPassword ? (
              <FaRegEye
                size={22}
                className="absolute  top-8.5 right-4 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaEyeSlash
                size={22}
                className="absolute  top-8.5 right-4 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}

            {fieldError.password && (
              <p className="text-red-600 text-sm mt-1">{fieldError.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-slate-800 text-white p-2 rounded-md hover:bg-slate-700 transition duration-200 cursor-pointer"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-blue-600 hover:underline">
            Signup
          </Link>
        </p>
        <p className="text-center text-gray-600 mt-2">
          <Link to={"/"} className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </p>
        <p className="text-center text-gray-500 text-sm mt-4">
          By logging in, you agree to our{" "}
          <Link to="/term" className="text-blue-600 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/policy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
