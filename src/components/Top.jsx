import React, { useState, useEffect } from "react";
import UserIcon from "./icons/UserIcon";
import SettingIcon from "./icons/SettingIcon";

const Top = () => {
  const [username, setUsername] = useState("user");

  useEffect(() => {
    fetch(`/username`)
    .then(response => response.json())
    .then(data => {
      if (data.username) {
        setUsername(data.username);
        console.log(data);
      }
    })
    .catch(error => {
      console.error('Error fetching username:', error);
    });
  }, []);

  return (
    <nav className="w-full flex p-2 px-4 items-center justify-end fixed top-2 text-white h-8">
      <div className="userContainer flex items-center gap-3 ">
        <UserIcon />
        <p className="text-white font-semibold text-sm">{username}</p>
      </div>
      {/* <SettingIcon /> */}
    </nav>
  );
};

export default Top;
