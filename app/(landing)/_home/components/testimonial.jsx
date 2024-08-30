"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

import { TESTIMONIALS } from "../constants";

const Testimonial = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="swiper testimonial-swiper-3">
        <Swiper
          speed={1800}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 1800 }}
          ref={swiperRef}
          className="swiper-wrapper"
        >
          {TESTIMONIALS.map((item, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="testimonial-2 wow fadeInUp">
                <div className="row align-items-xl-center justify-content-center">
                  <div className="col-lg-8 ">
                    <div className="testimonial-info">
                      <FontAwesomeIcon icon={faQuoteLeft} className="quote" />
                      <p className="testimonial-text">{item.feedback}</p>
                      <p className="testimonial-name mb-0">{item.name}</p>
                      <span className="testimonial-position text-primary">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        onClick={() => {
          swiperRef.current.swiper.slidePrev();
        }}
        className="dz-swiper-prev3"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div
        onClick={() => {
          swiperRef.current.swiper.slideNext();
        }}
        className="dz-swiper-next3"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </>
  );
};

export default Testimonial;
