import React from "react";
import UserStories from "./UserStories";
import UserPost from "./UserPost";

const Feed = () => {
  return (
    <>
      <div className=" pl-5 flex w-[60%] mx-auto mt-8 flex-col  items-center  min-h-[100vh] h-auto justify-center ">
        <UserStories />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
      </div>
    </>
  );
};

export default Feed;
