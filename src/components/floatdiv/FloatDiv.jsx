import React from "react";
import "./FloatDiv.css";
const FloatDiv = ({ image }) => {
  return (
    <>
      <div className="floatingdiv">
        <img src={image} alt="" />
        <span>
          web
          <br />
          developer
        </span>
      </div>
    </>
  );
};

export default FloatDiv;
