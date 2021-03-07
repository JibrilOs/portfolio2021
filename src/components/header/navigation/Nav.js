import React from "react";
import Home from "../../../pages/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./nav.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Nav({ handleClear }) {
  return (
    <Router>
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
              <Link to="/" className="inner-shadow active">
                home
              </Link>
            </li>
            <li>
              <Link to="/about" className="outer-shadow hover-in-shadow">
                about
              </Link>
            </li>
            <li>
              <Link to="/services" className="outer-shadow hover-in-shadow">
                services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="outer-shadow hover-in-shadow">
                portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="outer-shadow hover-in-shadow">
                contact
              </Link>
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

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Nav;
