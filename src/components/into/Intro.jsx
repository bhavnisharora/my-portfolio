import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Bhavi from "../../img/updatedbhavi.png";
// import glassesimoji from "../../img/glassesimoji.png";
// import { motion } from "framer-motion";

// import FloatDiv from "../floatdiv/FloatDiv";
const Intro = () => {
  // const transition = { duration: "2", type: "spring" };
  return (
    <>
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span>Hello :) it's nice to see you!</span>
            <span> Bhavnish Arora</span>
            <span>Passionate Frontend Developer</span>
          </div>
          <a href="https://wa.me/+916284274857" target="_blank">
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
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={Bhavi} className="myPic" alt="" />
          <div className="i-float">
            {/* <motion.img
              initial={{ left: "-36%" }}
              whileInView={{ left: "-24%" }}
              transition={transition}
              src={glassesimoji}
              alt=""
              className="floatingDiv"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
