import React from "react";
import Home from "../assets/Home.png";
import logo from "../assets/logo.png";
import Music from "../assets/Music.png";
import logout from "../assets/logout.png";

import "../styles/SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar_container">
      <div className="logo_sidebar">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <button>
            <img src={Home} alt="" />
          </button>
        </div>
        <div>
          <button>
            <img src={Music} alt="" />
          </button>
        </div>
      </div>
      <div className="bottom_sidebar">
        <button>
          <img src={logout} alt="" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
