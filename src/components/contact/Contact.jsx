import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useRef } from "react";
const Contact = () => {
  // const [done, setDone] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hc44u4c",
        "template_r3qijys",
        form.current,
        "nzCA2st0VzAv-y8_G"
      )
      .then(
        (result) => {
          console.log(result.text);
          // setDone(true);
          form.current.reset();

          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Form submitted successfully.",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="contact-form" id="Contact">
        <div className="w-left">
          <div className="awesome">
            <span>Get in Touch</span>
            <span>Contact Me</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              name="from_name"
              type="text"
              className="user"
              placeholder="Name"
            />
            <input
              name="email_id"
              type="email"
              className="user"
              placeholder="Email"
            />
            <textarea name="message" className="user" placeholder="Message" />
            <input type="submit" value="send" className="button" />
            {/* <span>{done && "Thanks for contacting me!"}</span> */}

            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
