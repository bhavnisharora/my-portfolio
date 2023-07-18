import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
// import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Consectetur suscipit quas pariatur fugit explicabo qui nemo hi autem soluta molestiae.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Consectetur suscipit quas pariatur fugit explicabo qui nemo hi autem soluta molestiae.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Consectetur suscipit quas pariatur fugit explicabo qui nemo hi autem soluta molestiae.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit Consectetur suscipit quas pariatur fugit explicabo qui nemo hi autem soluta molestiae.",
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
            className="blur t-blur1"
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
