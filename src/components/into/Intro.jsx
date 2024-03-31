import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Bhavi from "../../img/pic.jpg";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span>Hey :) Wass up!</span>
            <span> Bhavnish Arora</span>
            <span>Mern Stack Developer</span>
          </div>
          <a
            href="https://www.upwork.com/freelancers/~0114030dfb3b78b204"
            target="_blank"
          >
            <button className="button i-button">hire me</button>
          </a>
          <div className="i-icons">
            <a href="https://github.com/bhavnisharora" target="_blank">
              <img src={Github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/bhavnish-arora-b6398a198"
              target="_blank"
            >
              <img src={LinkedIn} alt="" />
            </a>
            <a
              href="https://instagram.com/bhaviarora786?utm_medium=copy_link"
              target="_blank"
            >
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
        <div className="i-right">
          <img src={Bhavi} className="myPic" alt="" />
        </div>
      </div>
    </>
  );
};

export default Intro;
