import React from "react";
import "./nav.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Nav(props) {
  return (
    <nav className="nav-menu">
      <div className="close-nav-menu outer-shadow hover-in-shadow">&times;</div>
      <div className="nav-menu-inner">
        <ul>
          <li>
            <a href="/home" className="inner-shadow active">
              home
            </a>
          </li>
          <li>
            <a href="/" className="outer-shadow hover-in-shadow">
              about
            </a>
          </li>
          <li>
            <a href="/" className="outer-shadow hover-in-shadow">
              services
            </a>
          </li>
          <li>
            <a href="/" className="outer-shadow hover-in-shadow">
              portfolio
            </a>
          </li>
          <li>
            <a href="/" className="outer-shadow hover-in-shadow">
              contact
            </a>
          </li>
        </ul>
      </div>
      <p className="copyright">
        <AiOutlineCopyrightCircle /> 2021 ;JOSDEV
      </p>
    </nav>
  );
}

export default Nav;
