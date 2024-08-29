"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { PORTFOLIO_DATA } from "../constants";

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
                <Image
                  src={item.image}
                  width={325}
                  height={290}
                  quality={100}
                  sizes="(min-width: 1000px) 33vw, (min-width: 800px) 50vw, (min-width: 440px) calc(94.12vw + 26px), calc(83.33vw + 50px)"
                  alt={item.alt}
                  title={item.alt}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        onClick={() => swiperRef.current.swiper.slidePrev()}
        className="portfolio-2-button-prev btn-prev"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div
        onClick={() => swiperRef.current.swiper.slideNext()}
        className="portfolio-2-button-next btn-next"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};

export default Portfolio;
