import React from "react";
import TelegramLogin from "../components/TelegramLoginBtn";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  // Handle the Telegram authentication event..........
  const handleTelegramAuth = (user) => {
    onLogin(user);
    navigate("/home");
  };

  // Pass the handleTelegramAuth function to the TelegramLogin component..............
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <TelegramLogin onTelegramAuth={handleTelegramAuth} />
    </div>
  );
};

export default Login;
