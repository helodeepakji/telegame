import React from "react";
import usdt from "../assets/usdt.png";
import Bottom from "../components/Bottom";
const LeaderBoard = () => {
  const results = [
    { name: "Ayush", level: "7lvl", coins: "34446884 HM" },
    { name: "Ayush", level: "7lvl", coins: "34446884 HM" },
    { name: "Ayush", level: "7lvl", coins: "34446884 HM" },
    { name: "Ayush", level: "7lvl", coins: "34446884 HM" },
    { name: "Ayush", level: "7lvl", coins: "34446884 HM" },
    { name: "Ayush", level: "7lvl", coins: "34446884 HM" },
  ];
  return (
    <section className="bg-black uppercase text-white bg-gradient-to-b from-black to-[#3430F8] h-full p-2">
      <h1 className="uppercase font-semibold text-4xl py-4">Leader Board</h1>
      <h3 className="uppercase font-semibold text-lg">weekly referrer</h3>
      <div className="border border-gray-400 "></div>
      <div className="bg-white bg-opacity-10 mt-7 rounded-3xl p-2 flex items-center justify-evenly ">
        <div className="flex flex-col items-center  h-28 justify-evenly p-1">
          <p className="uppercase font-semibold text-sm text-gray-400 ">
            win this week
          </p>
          <p className="text-3xl text-[#EBFF00]">$ 440,390 </p>
          <p className="font-semibold text-xs">result soon</p>
        </div>
        <div className="flex items-center ">
          <p className="font-semibold text-xl text-gray-400 ">usdt</p>
          <img src={usdt} />
        </div>
      </div>
      <div
        className="resultContainer mt-4 p-2 w-full rounded-3xl 
      bg-white bg-opacity-10"
      >
        {results.map((res, index) => (
          <div className="flex flex-col gap-5">
            <div className="flex items-center w-full justify-between text-sm mt-4">
              <div className="flex items-center justify-between gap-2 ">
                <p>{index + 1}</p>
                <p>{res.name}</p>
                <p>{res.level}</p>
              </div>
              <div>{res.coins}</div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <Bottom />
    </section>
  );
};
<h1>Comming Soon !.....</h1>
export default LeaderBoard;

