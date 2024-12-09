// pages/signup.js
import React from 'react';
import Image from 'next/image';
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section */}
      <div className="flex-1 flex justify-center items-center">
        <Image
          src="/login_side_mage.png"
          alt="Shopping Cart with Phone"
          width={805}
          height={781}
          className="w-4/5 sm:w-3/5 md:w-2/3 lg:w-full h-auto"
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 lg:p-20 pb-20">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Create an account</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">Enter your details below</p>

          {/* Form */}
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email or Phone Number"
                required
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 text-sm sm:text-base"
            >
              Create Account
            </button>
          </form>

          {/* Google Sign Up */}
          <div className="flex items-center justify-center mt-6">
            <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-md hover:bg-gray-100 text-sm sm:text-base">
              <span className='mr-4 text-xl sm:text-2xl'><FcGoogle /></span>
              Sign up with Google
            </button>
          </div>

          {/* Already have an account */}
          <p className="text-gray-600 mt-4 text-center text-sm sm:text-base">
            Already have an account?{' '}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;