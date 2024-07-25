import React from "react";
import Top from "../components/Top";
import Header from "../components/Header";
import HeroComp from "../components/HeroComp";
import Bottom from "../components/Bottom";

const Home = () => {
  return (
    <div className="flex flex-col h-full justify-evenly bg-[#1B1F24]">
      <Top />
      <Header />
      <HeroComp />
      <Bottom />
    </div>
  );
};

export default Home;
