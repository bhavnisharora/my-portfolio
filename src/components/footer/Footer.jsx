import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Envelope from "@iconscout/react-unicons/icons/uil-Envelope";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={Wave} style={{ width: "100%" }} alt="" />
        <div className="f-content">
          {/* <span>bhavnisharora786@gmail.com</span> */}
          <div className="f-icons">
            <a
              href="https://instagram.com/bhaviarora786?utm_medium=copy_link"
              target="_blank"
            >
              <Insta className="icon" color="white" size="3.5rem" />
            </a>
            <a
              href="https://www.linkedin.com/in/bhavnish-arora-b6398a198"
              target="_blank"
            >
              <Linkedin className="icon" color="white" size="3.5rem" />
            </a>
            <a href="https://github.com/bhavnisharora" target="_blank">
              <Github className="icon" color="white" size="3.5rem" />
            </a>
            <a href="mailto: bhavnisharora786@gmail.com" target="_blank">
              <Envelope className="icon" color="white" size="3.5rem" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
