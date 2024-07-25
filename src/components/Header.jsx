import React from "react";
import ProgressRect from "./ProgressRect";
import UserIcon from "./icons/UserIcon";
import pavigation from "../assets/Pavigation.png";

const Header = () => {
  return (
    <section className="w-full flex p-2 px-4 items-center justify-between bg-[#1B1F24] h-14 text-white ">
      <div className="flex flex-col items-start">
        <p className="capitalize font-semibold text-xs pb-3">Bronze</p>
        <ProgressRect />
        <p className="capitalize font-semibold text-xs pb-3">100K</p>
      </div>
      {/* <div className="rounded-3xl px-3 p-1 flex gap-2 items-center justify-between bg-gray-800 ">
        <UserIcon />
        <p className="capitalize font-semibold text-sm">123M</p>
      </div> */}
    </section>
  );
};

export default Header;
