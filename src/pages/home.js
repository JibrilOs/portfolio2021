import React from "react";
import Button from "../components/Buttons/button";
import "./home.css";
import pic from "../../src/img/profile2.png";

function Home() {
  return (
    <section className="home-section section">
      <div className="container">
        <div className=" row fullscreen align-items-center">
          <div className="home-text">
            <p>Hello</p>
            <h2>I'm Jibril</h2>
            <h1> Web Developer & Designer </h1>
            <Button />
          </div>
          <div className="home-img">
            <div className="img-box inner-shadow">
              <img
                src={pic}
                alt="profile pics"
                className="outer-shadow hover-in-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;