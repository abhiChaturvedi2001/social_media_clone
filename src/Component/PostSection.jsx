import React from "react";
import { GrGrid } from "react-icons/gr";
import { BsCameraReels } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { menuItems } from "../utils/constant";

const PostSection = () => {
  // getting the icon dynamic
  const getIcon = (icon) => {
    switch (icon) {
      case "GrGrid":
        return <GrGrid />;
      case "BsCameraReels":
        return <BsCameraReels />;
      case "FaRegUserCircle":
        return <FaRegUserCircle />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="border-t-2 my-5">
        <div className="top-bar flex space-x-10 my-5 justify-center">
          {menuItems.map((items) => {
            return (
              <>
                <div className="flex items-center space-x-2">
                  {getIcon(items.icon)}
                  <p className="uppercase tracking-wider font-bold">
                    {items.text}
                  </p>
                </div>
              </>
            );
          })}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <img
            className="w-[300px] h-[300px] object-cover "
            src="https://images.unsplash.com/photo-1575796267277-8728d6a36aa8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="w-[300px] h-[300px] object-cover"
            src="https://plus.unsplash.com/premium_photo-1669741908308-5ca216f3fcd1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="w-[300px] h-[300px] object-cover"
            src="https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <img
            className="w-[300px] h-[300px] object-cover"
            src="https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default PostSection;
