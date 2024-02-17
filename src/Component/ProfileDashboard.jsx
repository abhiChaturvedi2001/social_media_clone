import React from "react";
import PostSection from "./PostSection";

const ProfileDashboard = () => {
  return (
    <>
      <div className="w-[55%] mx-auto mt-[100px] font-poppins ">
        <div className="flex justify-around ">
          <div className="left">
            <img
              className="w-[150px] h-[150px] rounded-[50%] object-cover"
              src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="user_profile"
            />
          </div>
          <div className="right">
            <div className="flex space-x-5">
              <h1 className="font-bold">abhi_chatrvedi</h1>
              <div className="border cursor-pointer font-poppins w-full px-8 bg-[#efefef] rounded-md">
                Follow
              </div>
              <div className="border font-poppins cursor-pointer w-full px-8 bg-[#efefef] rounded-md">
                Message
              </div>
            </div>
            <div className="flex space-x-5 my-4 ">
              <p className="font-bold">7 post</p>
              <p className="font-bold">360 followers</p>
              <p className="font-bold">360 following</p>
            </div>
            <div>
              <p className="font-bold">Abhishek Chaturvedi</p>
            </div>
            <div>
              <p>bio caption</p>
            </div>
          </div>
        </div>
        <PostSection />
      </div>
    </>
  );
};

export default ProfileDashboard;
