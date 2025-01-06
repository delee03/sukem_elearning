'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Register() {
  const router = useRouter();
  return (
    <>
      <div className="font-[sans-serif] max-sm:px-4">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
            <div className="md:max-w-md w-full px-4 py-4">
              <form>
                <div className="mb-12">
                  <h3 className="text-gray-800 text-3xl font-extrabold">
                    Register
                  </h3>
                  <p className="text-sm mt-4 text-gray-800">
                    Already have an account?
                    <a
                      onClick={() => router.push('/login')}
                      className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                    >
                      Login here
                    </a>
                  </p>
                </div>

                <div className="mb-6">
                  <label className="text-gray-800 text-xs block mb-2">
                    Username
                  </label>
                  <input
                    name="username"
                    type="text"
                    required
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none"
                    placeholder="Enter username"
                  />
                </div>

                <div className="mb-6">
                  <label className="text-gray-800 text-xs block mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none"
                    placeholder="Enter email"
                  />
                </div>

                <div className="mb-6">
                  <label className="text-gray-800 text-xs block mb-2">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none"
                    placeholder="Enter password"
                  />
                </div>

                <div className="mb-6">
                  <label className="text-gray-800 text-xs block mb-2">
                    Confirm Password
                  </label>
                  <input
                    name="confirmPassword"
                    type="password"
                    required
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 pl-2 pr-8 py-3 outline-none"
                    placeholder="Confirm password"
                  />
                </div>

                <div className="mt-12">
                  <button
                    type="submit"
                    className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    Register
                  </button>
                </div>
                <div className="space-x-6 flex justify-center">
                  <button type="button" className="border-none outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7 inline"
                      fill="#000"
                      viewBox="0 0 22.773 22.773"
                    >
                      {/* Replace with appropriate SVG */}
                    </svg>
                  </button>
                  {/* Add more social login buttons as needed */}
                </div>
              </form>
            </div>
            <div className="w-full h-auto p-4 flex items-center justify-center">
              <Image
                src="https://readymadeui.com/signin-image.webp"
                className="w-full aspect-[12/12] object-contain"
                alt="login-image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
