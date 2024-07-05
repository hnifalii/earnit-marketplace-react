import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import { toast } from "react-toastify";

// Icons
import { FcGoogle } from "react-icons/fc";

// const clientId =
//   "880228978499-gpo594pijdkiqbac9qk7l01ggolqgvql.apps.googleusercontent.com";

const initialUser = { password: "", identifier: "" };

const Login = () => {
//   const onSuccess = (res) => {
//     console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
//   };

//   const onFailure = (res) => {
//     console.log("LOGIN FAILED! res: ", res);
//   };

  const [user, setUser] = useState(initialUser);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = `http://localhost:1337/api/auth/local`
    try {
      if (user.identifier && user.password) {
        const res = await axios.post(url, user)
        console.log(res)
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  }

  return (
    <>
      {/* <div className="flex justify-center mt-40      bg-black bg-opacity-10">
          <form action="" id="loginForm" className="">
            <label htmlFor="username">Your Email or Username</label>
            <input type="text" id="username" placeholder="Email or username" required/>
            <label htmlFor="password"></label>
            <input type="text" id="password" placeholder="Password" required/>
          </form>
        </div> */}

      <div className="w-screen h-screen content-center from-sky-100 to-white  bg-gradient-to-tr">
        <div className="flex justify-center items-center py-6 text-primary text-5xl font-semibold font-sans">
          <Link to="/">
            <h1>earnit</h1>
          </Link>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-md shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-3">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Masuk ke akun Anda
              </h5>
              <div>
                <label
                  for="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username atau Email
                </label>
                <input
                  type="text"
                  name="identifier"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:border-primary block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Username"
                  value={user.identifier}
                  onChange={handleChange}
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:border-primary block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  minLength={8}
                  value={user.password}
                  onChange={handleChange}
                  spellCheck="false"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 accent-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    for="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Ingat saya
                  </label>
                </div>
                <Link
                  href=""
                  className="ms-auto text-sm text-primary hover:underline dark:text-blue-500"
                >
                  Lupa password?
                </Link>
              </div>
              <button
                className="w-full text-white bg-primary hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleLogin}
              >
                Masuk
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
                  Masuk dengan Google
                </div>
              </Link>
              {/* <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              /> */}
              <div className="text-sm font-medium text-gray-900 dark:text-gray-300">
                <p>
                  Belum punya akun?{" "}
                  <Link
                    to="signup"
                    className="text-primary hover:underline dark:text-blue-500"
                  >
                    Daftar
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

export default Login;
