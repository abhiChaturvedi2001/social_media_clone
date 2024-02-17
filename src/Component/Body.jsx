import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import SideBar from "./SideBar";
import Feed from "./Feed";
import { Outlet } from "react-router-dom";

const Body = () => {
  console.log("enter the body componenet");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      }
    });
  }, []);
  return (
    <>
      <div className="min-h-[100vh] h-auto">
        <div className="flex">
          <SideBar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Body;
