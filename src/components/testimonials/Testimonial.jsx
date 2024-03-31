import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/t1.jpg";
import profilePic2 from "../../img/t2.jpg";
import profilePic3 from "../../img/t3.jpg";
import profilePic4 from "../../img/t5.jpg";
// import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      title: "Sidak Vats, Lovely Professional University",
      review:
        "Amazing Work!  you can trust this guy and can put your time into his content",
    },
    {
      img: profilePic2,
      title: "Himanshu, Writesonic",
      review:
        "Bhavnish is Good full stack Developer with really impressive Skills. ",
    },
    {
      img: profilePic3,
      title: "Deepak Seth, Lakshay Wedding Studio",
      review:
        "I worked with Bhavnish. It was my first time with him and it was great working, Thank You",
    },
    {
      img: profilePic4,
      title: "Amit, Qualcomm",
      review:
        "He is Enthusiast and Fast Learner. He has Excellent Coding Skills and great learning experience",
    },
  ];
  return (
    <>
      <div className="t-wrapper" id="Testimonial">
        <div className="t-heading">
          <span>Clients always get</span>
          <span>Exceptional Work</span>
          <span>from me..</span>
          <div
            className="
            blur t-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
          <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        </div>
        <Swiper
          // modules={[Pagination]}
          slidesperview={1}
          // Pagination={{ clickable: true }}
        >
          {clients.map((elem, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="testimonial">
                  <img src={elem.img} alt="" />
                  <span
                    style={{
                      marginTop: "15px",
                      marginBottom: "15px",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "black",
                    }}
                  >
                    {elem.title}
                  </span>
                  <span>{elem.review}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
