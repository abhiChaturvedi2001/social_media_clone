import React from "react";
import UserStories from "./UserStories";
import UserPost from "./UserPost";

const Feed = () => {
  return (
    <>
      <div className=" w-[40%] pl-5 overflow-y-scroll ">
        <UserStories />
        <UserPost />
      </div>
    </>
  );
};

export default Feed;
