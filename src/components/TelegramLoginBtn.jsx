import React, { useEffect } from "react";

const TelegramLogin = ({ onTelegramAuth }) => {
  useEffect(() => {
    const loadTelegramWidget = () => {
      const script = document.createElement("script");
      // script.async = true;
      // script.src = "https://telegram.org/js/telegram-widget.js?22";
      // script.setAttribute("data-telegram-login", "mining_it_bot");
      // script.setAttribute("data-size", "large");
      // script.setAttribute("data-request-access", "write");
      // script.setAttribute("data-onauth", "window.onTelegramAuth(user)");

      // script.onload = () => {
      //   console.log("Telegram widget script loaded successfully.");
      // };

      // script.onerror = () => {
      //   console.error("Failed to load the Telegram widget script.");
      // };

      document.getElementById("telegram-login-container").appendChild(script);
    };

    // Define the onTelegramAuth function
    window.onTelegramAuth = (user) => {
      onTelegramAuth(user);
    };

    // Load the Telegram widget
    loadTelegramWidget();
  }, [onTelegramAuth]);

  return <div id="telegram-login-container"></div>;
};

export default TelegramLogin;
