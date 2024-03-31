import React from "react";
import Icon from "../img/whatsapp.png";

const Whatsapp = () => {
  return (
    <>
      <div style={{ position: "fixed", bottom: "12px", right: "5px" }}>
        <a href="https://wa.me/916284274857" target="_blank">
          <img
            src={Icon}
            alt="whatsapp"
            style={{ height: "3rem", borderRadius: "100%" }}
          />
        </a>
      </div>
    </>
  );
};

export default Whatsapp;
