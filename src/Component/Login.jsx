import React, { useRef, useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { App_Store_Logo, Play_Store_Logo, app_logo } from "../utils/constant";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleProvider } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignupForm, setisSignupForm] = useState(false);
  const fullName = useRef(null);
  const userName = useRef(null);
  const password = useRef(null);
  const email = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/instagram");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleToggle = () => {
    setisSignupForm(!isSignupForm);
  };

  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const { uid, email, displayName, photoURL } = user;
        console.log(user);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <>
      <>
        <div className="absolute font-poppins top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="border w-[23rem] py-10 min-h-[58vh] h-auto px-10 text-center ">
            <img className="w-[200px] mx-auto" src={app_logo} alt="" />
            {isSignupForm && (
              <p>Sign up to see photos and videos from your friends.</p>
            )}
            {isSignupForm && (
              <p
                onClick={handleLoginWithGoogle}
                className="font-bold cursor-pointer  bg-[#60b3f7] mt-4 rounded-md py-2 flex items-center space-x-2 justify-center"
              >
                {" "}
                <FcGoogle className="text-2xl text-white" />{" "}
                <span className="text-white">login with google </span>
              </p>
            )}
            <form className="mt-5">
              <div className=" w-full">
                <input
                  className="px-2 w-full bg-gray-100 py-2 outline-none border rounded-md"
                  type="email"
                  ref={email}
                  placeholder="Phone number, username, email...."
                />
              </div>
              {isSignupForm && (
                <div className="mt-2 w-full">
                  <input
                    ref={fullName}
                    className="px-2 w-full bg-gray-100 py-2 outline-none border rounded-md"
                    type="text"
                    placeholder="Full name"
                  />
                </div>
              )}
              {isSignupForm && (
                <div className="mt-2 w-full">
                  <input
                    ref={userName}
                    className="px-2 w-full bg-gray-100 py-2 outline-none border rounded-md"
                    type="text"
                    placeholder="username"
                  />
                </div>
              )}
              <div className="mt-2 w-full">
                <input
                  ref={password}
                  className="px-2 py-2 bg-gray-100 border outline-none rounded-md w-full"
                  type="password"
                  placeholder="Password"
                />
              </div>
              {isSignupForm && (
                <p className="text-center my-3 text-[10px] ">
                  People who use our service may have uploaded your contact
                  information to Instagram. Learn more
                </p>
              )}
              {isSignupForm && (
                <p className="text-center my-3 text-[10px] ">
                  By signing up, you agree to our Terms, Privacy Policy and
                  Cookies Policy.
                </p>
              )}
              <button className="mt-2 bg-[#60b3f7] rounded-lg font-semibold text-white w-full py-2">
                {isSignupForm ? "Sign Up" : "Login"}
              </button>
            </form>
            {!isSignupForm && (
              <div className="mt-[40px]">
                <p
                  onClick={handleLoginWithGoogle}
                  className="font-bold cursor-pointer flex items-center space-x-2 justify-center"
                >
                  {" "}
                  <FcGoogle className="text-2xl text-[#385185]" />{" "}
                  <span className="text-[#385185]">login with google </span>
                </p>
                <p className="capitalize mt-2 hover:underline cursor-pointer tracking-wide ">
                  forgotten your password ?
                </p>
              </div>
            )}
          </div>
          <div className="border w-[23rem] h-[8vh] py-5 mt-2 text-center ">
            <p>
              {isSignupForm ? "Have an Acount? " : " Don't Have an Account? "}
              <span
                onClick={handleToggle}
                className="text-[#60b3f7] cursor-pointer font-bold"
              >
                {isSignupForm ? "Login" : "Sign Up"}
              </span>{" "}
            </p>
          </div>
          <div className="text-center mt-5">
            <h1>Get the app</h1>
            <div className="flex space-x-5 justify-center mt-5">
              <img className="w-[100px] h-[30px]" src={App_Store_Logo} alt="" />
              <img
                className="w-[100px] h-[30px]"
                src={Play_Store_Logo}
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Login;
