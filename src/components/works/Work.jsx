import React from "react";
import "./Work.css";
import html from "../../img/mongodb.png";
import css3 from "../../img/node.png";
import javascript from "../../img/aws.png";
import react from "../../img/react.png";
import firebase from "../../img/firebase.svg";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <>
      <div className="works">
        <div className="awesome">
          <span>These are my </span>
          <span>key skills </span>
          <span>
            Programming: C/C++, Javascsript, DSA
            <br />
            Frameworks: Reactjs, Nextjs, tailwindCSS, Expressjs, Redux
            <br />
            Dev Tools: Vscode, Git, Postman, Rest Api
            <br />
            Other: Lightroom, Photoshop, Wordpress, Shopify
          </span>
          <div className="work-hire">
            <a
              href="https://www.upwork.com/freelancers/~0114030dfb3b78b204"
              target="_blank"
            >
              <button className="button s-button">Hire Me</button>
            </a>
          </div>
        </div>

        <div className="w-right">
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle"
          >
            <div className="w-secCircle">
              <img src={html} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={react} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={javascript} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={css3} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={firebase} className="firebase-logo" alt="" />
            </div>
          </motion.div>
          <div className="w-backCircle blueCircle"> </div>
          <div className="w-backCircle yellowCircle"> </div>
        </div>
      </div>
    </>
  );
};

export default Work;
