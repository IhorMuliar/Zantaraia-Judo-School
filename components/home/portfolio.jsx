"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { PORTFOLIO_DATA } from "@/constants/home";

const Portfolio = () => {
  const swiperRef = useRef(null);

  return (
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
        {PORTFOLIO_DATA.map((item, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className="image-tooltip-effect dz-box style-3 wow fadeInUp">
              <div className="dz-media">
                <img src={item.image} alt="Porfolio iamge" />
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
        onClick={() => swiperRef.current.swiper.slidePrev()}
        className="portfolio-2-button-prev btn-prev"
      >
        <i className="fas fa-chevron-left"></i>
      </div>
      <div
        onClick={() => swiperRef.current.swiper.slideNext()}
        className="portfolio-2-button-next btn-next"
      >
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default Portfolio;