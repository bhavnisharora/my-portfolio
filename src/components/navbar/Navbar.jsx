import React from "react";
import "./Navbar.css";
import Toggle from "../toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">PORTFOLIO</div>
          <Toggle />
        </div>

        <div className="n-right">
          <div className="n-list">
            <ul>
              <Link
                spy={true}
                to="Navbar"
                activeClass="activeClass"
                smooth={true}
              >
                <li>home</li>
              </Link>
              <Link spy={true} to="Services" smooth={true}>
                <li> services </li>
              </Link>
              <Link spy={true} to="Experience" smooth={true}>
                <li>experience</li>
              </Link>
              <Link spy={true} to="Profile" smooth={true}>
                <li>portfolio</li>
              </Link>
              {/* <Link spy={true} to="Services" smooth={true}>
                <li>education</li>
              </Link> */}
              <Link spy={true} to="Testimonial" smooth={true}>
                <li>testimonials</li>
              </Link>
            </ul>
          </div>
          <Link to="Contact" spy={true} smooth={true}>
            <button className="button n-button">contact us</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
