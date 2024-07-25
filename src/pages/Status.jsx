import React from "react";
import hero from "../assets/hero.png";
import CameraIcon from "../components/icons/CameraIcon";
import DownIcon from "../components/icons/Down";
import Bottom from "../components/Bottom";
import Fillers from "../components/Fillers";
const Status = () => {
  return (
    <div className="uppercase  text-white  bg-gradient-to-b from-[#3430F8] to-black h-screen p-2 bg-opacity-15 ">
      <div className="w-full p-4 flex items-center justify-center  gap-5">
        <img src={hero} className="w-12 h-12 object-contain" />
        <p className="font-semibold text-3xl">20.354 M</p>
      </div>
      <p className="font-semibold text-[16px]  text-center">Legendary </p>
      <div className="w-72 h-12 border-b border-gray-400 block m-auto"></div>
      <div className="mt-4 flex items-center  w-full justify-center gap-9">
        <div className="p-4 rounded-3xl bg-[#FFFFFF4D] text-white text-sm w-1/3 text-center">
          leagues
        </div>
        <div className="p-4 rounded-3xl bg-[#FFFFFF4D] text-white text-sm w-1/3 text-center">
          REFERALS
        </div>
      </div>
      <div className="coinsContainer flex flex-col  items-center  bg-white bg-opacity-30 rounded-3xl p-4  mt-5">
        <div className="flex items-center">
          <img src={hero} className="w-8 h-8" />
          <p className="font-semibold text-3xl">30,000,000</p>
        </div>
        <div className="mt-2">
          <Fillers filledCount={4} totalCount={8} />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-7">
        <div className="flex items-center w-full bg-[#FFFFFF4D] justify-between rounded-3xl p-4">
          <div className="flex items-center gap-5 ">
            <CameraIcon />
            <div className="middle">
              <p>watch video</p>
              <div className="flex gap-1 items-center">
                <img src={hero} className="w-4 h-4 object-contain" />
                10000
              </div>
            </div>
          </div>
          <DownIcon />
        </div>{" "}
        <div className="flex items-center w-full bg-[#FFFFFF4D] justify-between rounded-3xl p-4">
          <div className="flex items-center gap-5 ">
            <CameraIcon />
            <div className="middle">
              <p>watch video</p>
              <div className="flex gap-1 items-center">
                <img src={hero} className="w-4 h-4 object-contain" />
                10000
              </div>
            </div>
          </div>
          <DownIcon />
        </div>{" "}
        <div className="flex items-center w-full bg-[#FFFFFF4D] justify-between rounded-3xl p-4">
          <div className="flex items-center gap-5 ">
            <CameraIcon />
            <div className="middle">
              <p>watch video</p>
              <div className="flex gap-1 items-center">
                <img src={hero} className="w-4 h-4 object-contain" />
                10000
              </div>
            </div>
          </div>
          <DownIcon />
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Status;
