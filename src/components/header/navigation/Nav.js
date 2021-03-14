import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

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
                to="/"
                className="outer-shadow hover-in-shadow "
                activeClassName="active"
                onClick={handleClear}
                exact
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
                exact
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
                exact
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
                exact
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
                exact
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
