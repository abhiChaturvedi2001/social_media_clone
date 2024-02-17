import React from "react";
import { app_logo } from "../utils/constant";
import { MdHomeFilled, MdExplore } from "react-icons/md";
import { CiSearch, CiSquarePlus } from "react-icons/ci";
import { PiFilmSlateBold } from "react-icons/pi";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="flex fixed flex-col pl-5  w-[20%] border-r-[1px] border-gray-300 px-2 justify-between h-[100vh] py-5 ">
        <div>
          <img className="w-[150px]" src={app_logo} alt="" />
        </div>

        <div>
          <div className="flex items-center hover:cursor-pointer my-4 px-2 hover:bg-[#efefef86] py-2 text-center rounded-md transition-all delay-100 space-x-2">
            <MdHomeFilled className="text-3xl" />
            <h2 className="text-lg font-poppins">Home</h2>
          </div>
          <div className="flex items-center hover:cursor-pointer my-4 px-2 hover:bg-[#efefef86] py-2 text-center rounded-md transition-all delay-100 space-x-2">
            <CiSearch className="text-3xl" />
            <h2>Search</h2>
          </div>
          <div className="flex items-center hover:cursor-pointer my-4 px-2 hover:bg-[#efefef86] py-2 text-center rounded-md transition-all delay-100 space-x-2">
            <MdExplore className="text-3xl" />
            <h2>Explore</h2>
          </div>
          <div className="flex items-center hover:cursor-pointer my-4 px-2 hover:bg-[#efefef86] py-2 text-center rounded-md transition-all delay-100 space-x-2">
            <PiFilmSlateBold className="text-3xl" />
            <h2>Reels</h2>
          </div>
          <div className="flex items-center hover:cursor-pointer my-4 px-2 hover:bg-[#efefef86] py-2 text-center rounded-md transition-all delay-100 space-x-2">
            <BiSolidMessageRoundedDetail className="text-3xl" />
            <h2>Messages</h2>
          </div>
          <div className="flex items-center hover:cursor-pointer my-4 px-2 hover:bg-[#efefef86] py-2 text-center rounded-md transition-all delay-100 space-x-2">
            <FaRegHeart className="text-3xl" />
            <h2>Notification</h2>
          </div>
          <div className="flex items-center hover:cursor-pointer my-4 px-2 hover:bg-[#efefef86] py-2 text-center rounded-md transition-all delay-100 space-x-2">
            <CiSquarePlus className="text-3xl" />
            <h2>Create</h2>
          </div>
          <Link to={"/instagram/userprofile"}>
            <div className="flex items-center hover:cursor-pointer my-4 px-2 hover:bg-[#efefef86] py-2 text-center rounded-md transition-all delay-100 space-x-2">
              <h2>Profile</h2>
            </div>
          </Link>
        </div>

        <div className="flex items-center  hover:cursor-pointer py-2 px-2  rounded-md  transition-all delay-100 hover:bg-[#efefef86]  space-x-2">
          <FaBars className="text-3xl" />
          <h2>More</h2>
        </div>
      </div>
    </>
  );
};

export default SideBar;
