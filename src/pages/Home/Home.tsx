import React from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import img1 from "../../assets/ftruck1.jpeg";
import img2 from "../../assets/seating1.jpeg";
import img3 from "../../assets/food1.webp";

import Hero from "../../components/UI/Hero/Hero";

const Home = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      autoplay={true}
    >
      <SwiperSlide>
        <Hero src={img1} />
      </SwiperSlide>
      <SwiperSlide>
        <Hero src={img2} />
      </SwiperSlide>
      <SwiperSlide>
        <Hero src={img3} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Home;
