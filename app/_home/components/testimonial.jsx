"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

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
                      <i className="flaticon-left-quotes-sign quote"></i>
                      <p className="testimonial-text">
                        Чудове місце для тренувань! Зал оснащений сучасним
                        обладнанням, а тренери - професіонали своєї справи.
                        Атмосфера дружня і мотивуюча, що сприяє швидкому
                        прогресу. Якість навчання на високому рівні, а підтримка
                        з боку команди завжди допомагає досягати нових вершин.
                        Рекомендую всім, хто прагне покращити свої навички в
                        дзюдо!
                      </p>
                      <p className="testimonial-name mb-0">{item.name}</p>
                      <span className="testimonial-position text-primary">
                        Спортсмен
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
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div
        onClick={() => {
          swiperRef.current.swiper.slideNext();
        }}
        className="dz-swiper-next3"
      >
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </>
  );
};

export default Testimonial;
