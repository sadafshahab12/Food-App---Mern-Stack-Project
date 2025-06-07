import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    location: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    // it is post method with url we have to send body , data  coming from user through this form
    const response = await fetch("http://localhost:5000/signup/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userCredentials.name,
        location: userCredentials.location,
        email: userCredentials.email,
        password: userCredentials.password,
      }),
    });
    const data = await response.json();
    console.log(data);

    if (!data.success) {
      alert("Invalid Credentials.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className=" flex justify-center my-8 items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Join Our Food App
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Sign up to discover delicious meals and exclusive offers!
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
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
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
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
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
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
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-slate-800 text-white p-2 rounded-md cursor-pointer hover:bg-slate-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-600 hover:underline">
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
