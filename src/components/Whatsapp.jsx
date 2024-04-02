import React from "react";
import Icon from "../img/whatsapp.png";

const Whatsapp = () => {
  return (
    <>
      <a href="https://wa.me/916284274857" target="_blank">
        <div style={{ position: "fixed", bottom: "12px", right: "5px" }}>
          <img
            src={Icon}
            alt="whatsapp"
            style={{ height: "3rem", borderRadius: "100%" }}
          />
        </div>
      </a>
    </>
  );
};

export default Whatsapp;
