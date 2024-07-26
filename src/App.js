

import React, { useState ,useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import Status from "./pages/Status";
import Bottom from "./components/Bottom";


const tele = window.Telegram.WebApp;

const App = () => {
  const [user, setUser] = useState(() => {
    let storedUser = 'test';
      fetch(`/username`)
      .then(response => response.json())
      .then(data => {
        if (data.username) {
          setUser(data.username);
          storedUser = data.username;
        }
      })
      .catch(error => {
        console.error('Error fetching username:', error);
      });    
    return storedUser ? storedUser : null;
  });


  useEffect(()=>{
    tele.ready();
  })

  // const handleLogin = (user) => {
  //   setUser(user);
  //   localStorage.setItem("user", JSON.stringify(user));
  // };

  // const handleLogout = () => {
  //   setUser(null);
  //   localStorage.removeItem("user");
  // };

  const ProtectedRoute = ({ element }) => {
    // return user ? element : <Navigate to="/" />;
    return element;
  };

  return (
    <Router>
      <div className="h-screen">
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
          <Route
            path="/leaderboard"
            element={<ProtectedRoute element={<LeaderBoard />} />}
          />
          <Route
            path="/status"
            element={<ProtectedRoute element={<Status />} />}
          />
          // <Route path="/*" element={<p>Comming Soon</p>} />
        </Routes>
        {user && <Bottom />}
      </div>
    </Router>
  );
};

export default App;
