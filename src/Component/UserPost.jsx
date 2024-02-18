import React from "react";
import { FaRegHeart, FaShareAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaRegComment } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";

const UserPost = () => {
  const user = useSelector((store) => store.user);
  return (
    <>
      <div>
        <div className="w-[70%]">
          <div className="mt-5">
            <div className="flex items-center space-x-4 flex-wrap">
              <img
                className="w-[40px] rounded-[50%]"
                src={user === null ? "" : user.photoURL}
                alt=""
              />
              <p className="font-bold font-poppins">
                {user === null ? "" : user.displayName}
              </p>
              <p>. 1d</p>
            </div>
            <div className="mt-5">
              <img
                className="w-[450px] h-[400px] object-cover"
                src="https://images.unsplash.com/photo-1575796267277-8728d6a36aa8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="mt-4 flex justify-between items-center">
                <div className="flex  items-center space-x-5">
                  <FaRegHeart className="text-2xl cursor-pointer" />
                  <FaRegComment className="text-2xl cursor-pointer" />
                  <FaShareAlt className="text-2xl cursor-pointer" />
                </div>
                <CiBookmark className="text-2xl cursor-pointer font-bold" />
              </div>
              <div className="mt-2 font-poppins font-bold">5084 likes</div>
              <div>
                <span className="font-bold">
                  {user === null ? "" : user.displayName}
                </span>{" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, quis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPost;
