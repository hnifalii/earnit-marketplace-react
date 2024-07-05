import React, { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { FcGoogle } from "react-icons/fc";

const initialUser = {password:"", identifier:""};

const Signup = () => {
  const [user, setUser] = useState(initialUser);

  const handleChange = () => {};

  return (
    <>
      <div className="w-screen h-screen content-center from-sky-100 to-white  bg-gradient-to-tr">
        <div className="flex justify-center items-center py-6 text-primary text-5xl font-semibold font-sans">
          <Link to="/">
            <h1>earnit</h1>
          </Link>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-md shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-3" action="/">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Buat akun Anda
              </h5>
              <div>
                <label
                  for="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:border-primary block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Username"
                  spellCheck="false"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="identifier"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:border-primary block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Email"
                  // value={user.identifier}
                  // onChange={handleChange}
                  spellCheck="false"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  minLength={8}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:border-primary block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  spellCheck="false"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Buat akun
              </button>
              <div className="flex items-center">
                <div className="bg-black bg-opacity-20 w-full h-[1px]"></div>
                <p className="mx-2 mb-1 items-center text-gray-400 font-medium text-xs">
                  atau
                </p>
                <div className="bg-black bg-opacity-20 w-full h-[1px]"></div>
              </div>
              <Link to="oauth">
                <div className="w-full mt-2 text-primary border-gray-300 border-[1.5px] hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-md text-sm px-5 py-2.5 text-center">
                <FcGoogle size={22} className="absolute" />
                  Daftar dengan Google
                </div>
              </Link>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                <p>
                  Sudah punya akun?{" "}
                  <Link
                    to="login"
                    className="text-primary hover:underline dark:text-blue-500"
                  >
                    Masuk
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
