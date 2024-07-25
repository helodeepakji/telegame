import React from "react";
import { NavLink } from "react-router-dom";
import UserIcon from "./icons/UserIcon";
import boost from "../assets/boost.png";
import correct from "../assets/correct.png";
import home from "../assets/home.png";

const Bottom = () => {
  return (
    <div className="flex w-full justify-center ">
      <div className="fixed bottom-5 w-4/5 rounded-3xl flex items-center gap-4 justify-evenly bg-gray-700 h-16 p-8">
        <NavLink to="/home">
          <img src={home} alt="Status" className="w-7 h-7 border-red-50 " />
        </NavLink>
        <NavLink to="/status">
          <img src={correct} alt="Correct" className="w-14 h-12 p-1" />
        </NavLink>
        <NavLink to="/boost">
          <img src={boost} alt="Boost" className="w-9 h-9" />
        </NavLink>
        <NavLink to="/leaderboard" className="flex items-center relative ml-7">
          <div className="absolute -right-2 z-30">
            <UserIcon />
          </div>
          <div className="absolute right-0 z-20">
            <UserIcon />
          </div>
          <div className="absolute right-2 z-10">
            <UserIcon />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Bottom;
