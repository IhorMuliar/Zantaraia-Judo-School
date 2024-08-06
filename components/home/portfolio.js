"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { PORTFOLIOPIC8, PORTFOLIOPIC9, PORTFOLIOPIC10 } from "../../constants";

const carousel = [
  { img: PORTFOLIOPIC8 },
  { img: PORTFOLIOPIC9 },
  { img: PORTFOLIOPIC10 },
  { img: PORTFOLIOPIC8 },
  { img: PORTFOLIOPIC9 },
  { img: PORTFOLIOPIC10 },
];
const Portfolio = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="swiper portfolio-slider-2">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          ref={swiperRef}
          speed={1500}
          breakpoints={{
            991: { slidesPerView: 3 },
            775: { slidesPerView: 2 },
            240: { slidesPerView: 1 },
          }}
          className="swiper-wrapper"
        >
          {carousel.map((item, ind) => (
            <SwiperSlide className="swiper-slide" key={ind}>
              <div className="image-tooltip-effect dz-box style-3 wow fadeInUp">
                <div className="dz-media">
                  <img src={item.img} alt="" />
                </div>
                <div className="dz-info">
                  <h4 className="title m-b10">Yearly Fitness</h4>
                  <h6 className="sub-title text-primary m-b0">$150000</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          onClick={() => {
            swiperRef.current.swiper.slidePrev();
          }}
          className="portfolio-2-button-prev btn-prev"
        >
          <i className="fas fa-chevron-left"></i>
        </div>
        <div
          onClick={() => {
            swiperRef.current.swiper.slideNext();
          }}
          className="portfolio-2-button-next btn-next"
        >
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
