import React from "react";

const Fillers = ({ filledCount, totalCount }) => {
  const capsules = Array.from({ length: totalCount }, (_, index) => (
    <div
      key={index}
      className={`flex justify-center items-center w-8 h-4 mx-1 rounded-full ${
        index < filledCount ? "bg-[#EBFF00]" : "bg-gray-300"
      }`}
    ></div>
  ));

  return <div className="flex">{capsules}</div>;
};

export default Fillers;
