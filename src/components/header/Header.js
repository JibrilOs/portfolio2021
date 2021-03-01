import React, { useState } from "react";
import Nav from "./navigation/Nav";
import { FaBars } from "react-icons/fa";
import "./header.css";

function Header() {
  const [state, setState] = useState("start");
  const handleClick = () => {
    setState(true);
  };

  return (
    <div>
      <header>
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

      {state === true && <Nav />}
    </div>
  );
}

export default Header;
