import React from "react";
import Button from "../components/Buttons/button";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import CV from "./cv.pdf";

import "./about.css";
import pic from "../img/profile2.png";

function About(props) {
  return (
    <section className="about-section section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-heading="Main Info">About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-img">
            <div className="img-box inner-shadow">
              <img src={pic} alt="profile-pic" className="outer-shadow" />
            </div>
            <div className="social-links">
              <a
                href="https://www.facebook.com/jibril.s.osman"
                target="_blank"
                rel="noreferrer"
                className="outer-shadow hover-in-shadow"
              >
                <FaFacebookF size="1.5em" style={{ verticalAlign: "middle" }} />
              </a>
              <a
                href="https://www.facebook.com/jibril.s.osman"
                target="_blank"
                rel="noreferrer"
                className="outer-shadow hover-in-shadow"
              >
                <FaTwitter style={{ verticalAlign: "middle" }} />
              </a>
              <a
                href="https://www.facebook.com/jibril.s.osman"
                target="_blank"
                rel="noreferrer"
                className="outer-shadow hover-in-shadow"
              >
                <FaInstagram style={{ verticalAlign: "middle" }} />
              </a>
              <a
                href="https://www.facebook.com/jibril.s.osman"
                target="_blank"
                rel="noreferrer"
                className="outer-shadow hover-in-shadow"
              >
                <FaLinkedinIn style={{ verticalAlign: "middle" }} />
              </a>
              <a
                href="https://www.facebook.com/jibril.s.osman"
                target="_blank"
                rel="noreferrer"
                className="outer-shadow hover-in-shadow"
              >
                <FaGithub style={{ verticalAlign: "middle" }} />
              </a>
            </div>
          </div>
          <div className="about-info">
            <p>
              <span> Hi!My name is Jibril Salim Osman am Web developer .</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse
            </p>

            <p>
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            {/* <a href="cv.pdf" className="outer-shadow hover-in-shadow ">
              Download Cv
            </a> */}
            <div className="about-btn">
              <Button text="Download CV" link={CV} />
              <Button text="Hire Me" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
