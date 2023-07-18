import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../card/Card";
import Resume from "./Bhavnish-Resume.pdf";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: "1", type: "spring" };
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Expertise in creating visually appealing and
          <br />
          user-friendly websites using programming languages
          <br />
          and frameworks like HTML, CSS, and JavaScript and
          <br />
          React. Specialization in front-end development,
          <br />
          ensuring responsive and optimized websites.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "10rem" }}
          whileInView={{ left: "20rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Adobe, Photoshop, Vector Art"}
          />
        </motion.div>
        <motion.div
          initial={{ right: "20rem" }}
          whileInView={{ left: "-10rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Development"}
            detail={"HTML5, CSS3, Javascript, React, Firebase, Nextjs"}
          />
        </motion.div>
        <motion.div
          initial={{ right: "10rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Video Editing"}
            detail={
              "Subtitles Adding, Intro Creation, Pre-Wedding, Birthday & Parties"
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
