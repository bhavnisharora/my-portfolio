import React from "react";
import "./Profile.css";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import text from "../../img/text.jpg";
import weather from "../../img/weather.jpg";
import wedding from "../../img/wedding.jpg";
import { themeContext } from "../../Context";
import spotify from "../../img/spotify.jpg";
import movies from "../../img/movies.jpg";
import food from "../../img/food.jpg";
import "swiper/css";
const Profile = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const isSmartphone = () => {
    return window.innerWidth <= 480; // Adjust the width value as per your requirements
  };

  const slidesPerView = isSmartphone() ? 1 : 3;
  return (
    <>
      <div className="portfolio" id="portfolio">
        {/* heading */}
        <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
        <span>Portfolio</span>
        <Swiper
          spaceBetween={30}
          slidesPerView={slidesPerView}
          grabCursor={true}
          className="portfolio-slider"
        >
          <SwiperSlide>
            <a href="https://bhavnisharora.github.io/spotify/" target="_blank">
              <img src={spotify} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://showtimewebapp.netlify.app/" target="_blank">
              <img src={movies} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://bhavnisharora.github.io/foodiehub/"
              target="_blank"
            >
              <img src={food} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://bhavnisharora.github.io/weather-app/"
              target="_blank"
            >
              <img src={weather} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="http://lakshaywedding.netlify.app/" target="_blank">
              <img src={wedding} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://bhavnisharora.github.io/updatedtextanalyser/"
              target="_blank"
            >
              <img src={text} alt="" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Profile;
