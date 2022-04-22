import { Swiper } from "swiper/react";
import styled from "styled-components";

export const Carousel = styled(Swiper)`
  --swiper-navigation-color: rgba(255, 255, 255, 0.5);
  --swiper-navigation-size: 30px;
  --swiper-theme-color: white;
  --swiper-pagination-bullet-inactive-color: white;
  --swiper-pagination-bullet-size: 12px;
  --swiper-pagination-bullet-horizontal-gap: 10px;

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 25px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    transition: all 0.5s;
    margin: 0 20px;
    // height: 0px;
    // width: 0px;
  }
  .swiper-button-prev: hover {
    transition: all 0.5s;
    color: white;
  }
  .swiper-button-next: hover {
    transition: all 0.5s;
    color: white;
  }
`;
