import React, { useState, useEffect, useRef } from "react";
import hero from "../assets/hero.png";
import bijli from "../assets/bijli.png";

const HeroComp = () => {
  const [coins, setCoins] = useState(() => {
    const savedCoins = localStorage.getItem("coins");
    return savedCoins ? JSON.parse(savedCoins) : 500;
  });
  const [earned, setEarned] = useState(() => {
    const savedEarned = localStorage.getItem("earned");
    return savedEarned ? JSON.parse(savedEarned) : 0;
  });
  const [showAnimation, setShowAnimation] = useState(false);
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      if (coins < 500) {
        setCoins((prev) => {
          const newCoins = Math.min(prev + 1, 500);
          localStorage.setItem("coins", JSON.stringify(newCoins));
          return newCoins;
        });
      }
    }, 1000);
  };

  const addCoin = async (coin) => {
    try {
      const response = await fetch(`/api/addCoin/${coin}`, {
        method: 'GET',
        credentials: 'include'
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Coin added:', result);
      } else {
        console.error('Error adding coin:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding coin:', error);
    }
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [coins]);

  const handleClick = () => {
    if (coins > 0) {
      setCoins((prev) => {
        const newCoins = prev - 1;
        localStorage.setItem("coins", JSON.stringify(newCoins));
        return newCoins;
      });
      setEarned((prev) => {
        const newEarned = prev + 1;
        addCoin(newEarned);
        localStorage.setItem("earned", JSON.stringify(newEarned));
        return newEarned;
      });
      resetTimer();
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 500);
    }
  };

  return (
    <div className="flex flex-col p-2 rounded-3xl border-t-8 border-[#3430F8] h-4/5">
      <div className="counterContainer flex gap-2 items-center text-white justify-center">
        <img src={hero} className="w-11 h-12" alt="Hero" />
        <p className="font-semibold text-2xl relative">
          {earned}
          {showAnimation && (
            <span className="absolute text-green-500 animate-ping">+1</span>
          )}
        </p>
      </div>
      <img
        src={hero}
        className="object-contain block m-auto bg-[#3430F8] rounded-full p-3 bg-opacity-20 cursor-pointer transform transition-transform duration-200 active:scale-90 active:shadow-lg"
        onClick={handleClick}
        alt="Hero"
      />
      <div className="w-full flex items-center justify-center pb-36">
        <div className="rounded-3xl px-3 p-1 flex gap-2 items-center justify-between bg-gray-800 text-[#FFFEFE] w-fit font-semibold text-lg">
          {coins}/500
        </div>
        <img src={bijli} className="w-16 h-16" alt="Bijli" />
      </div>
      <div>
        <div className="containr">
          <div className="progress progress-striped">
            <div className="progress-bar" style={{ width: ((coins/500)*100)+'%' }}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComp;
