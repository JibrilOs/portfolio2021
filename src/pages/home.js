import React from "react";
import Button from "../components/Buttons/button";
import Effect from "../components/effect/effect";
import "./home.css";
import pic from "../../src/img/profile2.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <section className="home-section section">
      <Effect />
      <div className="container">
        <div className=" row fullscreen align-items-center">
          <div className="home-text">
            <p>Hello</p>
            <h2>I'm Jibril</h2>
            <h1> Web Developer & Designer </h1>
            <NavLink
              to="/about"
              exact
              className=" btn-1 outer-shadow hover-in-shadow"
            >
              More About Me
            </NavLink>
          </div>
          <div className="home-img">
            <div className="img-box inner-shadow">
              <img src={pic} alt="profile pics" className="outer-shadow " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
