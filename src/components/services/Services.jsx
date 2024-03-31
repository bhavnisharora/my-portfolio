import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../card/Card";
import Resume from "./resume.pdf";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: "1", type: "spring" };
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <div className="service-para">
          <span>
            I'm Mern Stack Web developer having 2+ year of experience in my
            field
          </span>
          <span>
            and a passionate Software Engineering student, who's always
            dedicated to
          </span>
          <span>
            his work. I can help you with all the sides of your project,
            verifying
          </span>
          <span>
            good UI/UX design and optimization. As an artist, my first love will
            be
          </span>
          <span>
            crafting the visual. I spend most days branding, designing and
            building
          </span>
          <span>
            out web interfaces as a freelancer. I can help you grow/manage your
          </span>
          <span>business and ideas.</span>
        </div>
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
            detail={"Figma, Photoshop, Lightroom, UI/UX"}
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
            heading={"Web Development"}
            detail={
              "Reactjs, Redux, Nextjs, TailwindCss, Nodejs, Expressjs, Mongodb"
            }
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
            heading={"Miscellaneous"}
            detail={"Wordpress, Firebase, git, Shopify, Bootstrap"}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
