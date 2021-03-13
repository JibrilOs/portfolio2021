import React from "react";
import Home from "../../../pages/home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import "./nav.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import About from "../../../pages/about";

function Nav({ handleClear }) {
  return (
    <div>
      <nav className="nav-menu">
        <div
          className="close-nav-menu outer-shadow hover-in-shadow"
          onClick={handleClear}
        >
          &times;
        </div>
        <div className="nav-menu-inner">
          <ul>
            <li>
              <NavLink
                to="/home"
                className="outer-shadow hover-in-shadow "
                activeClassName="active"
                onClick={handleClear}
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="outer-shadow hover-in-shadow "
                activeClassName="active "
                onClick={handleClear}
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="outer-shadow hover-in-shadow"
                activeClassName="active "
                onClick={handleClear}
              >
                services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className="outer-shadow hover-in-shadow"
                activeClassName="active"
                onClick={handleClear}
              >
                portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="outer-shadow hover-in-shadow"
                activeClassName="active"
                onClick={handleClear}
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
        <p className="copyright">
          <AiOutlineCopyrightCircle
            size="1.5em"
            style={{ verticalAlign: "middle" }}
          />
          {""} <span> 2021 josdev</span>
        </p>
      </nav>
    </div>
  );
}

export default Nav;
