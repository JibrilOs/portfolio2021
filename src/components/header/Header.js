import React, { useState } from "react";
import Nav from "./navigation/Nav";
import Home from "../../pages/home";
import About from "../../pages/about";
import { FaBars } from "react-icons/fa";
import "./header.css";

function Header() {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(true);
  };
  const handleClear = () => {
    setState(false);
  };

  return (
    <div >
      <header className="header">
        <div className="container">
          <div className="row justify-content-between">
            <div className="logo">
              <a href="/">JOS</a>
            </div>
            <div
              className="hamburger-btn outer-shadow hover-in-shadow"
              onClick={handleClick}
            >
              <FaBars />
            </div>
          </div>
        </div>
      </header>

      {state === true ? <Nav handleClear={handleClear} /> : <Home />}
    </div>
  );
}

export default Header;
