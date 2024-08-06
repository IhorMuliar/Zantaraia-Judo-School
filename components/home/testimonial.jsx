import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import { TESTIMONIALS } from "@/constants/home";

const Testimonial = ({ refVal }) => {
  return (
    <div className="swiper testimonial-swiper-3">
      <Swiper
        speed={1800}
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 1800 }}
        ref={refVal}
        className="swiper-wrapper"
      >
        {TESTIMONIALS.map((item, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className="testimonial-2 wow fadeInUp">
              <div className="row align-items-xl-center">
                <div className="col-lg-4">
                  <div className="testimonial-pic">
                    <img src={item.avatar} alt="Avatar" />
                  </div>
                </div>
                <div className="col-lg-8 ">
                  <div className="testimonial-info">
                    <i className="flaticon-left-quotes-sign quote"></i>
                    <p className="testimonial-text">
                      Чудове місце для тренувань! Зал оснащений сучасним
                      обладнанням, а тренери - професіонали своєї справи.
                      Атмосфера дружня і мотивуюча, що сприяє швидкому прогресу.
                      Якість навчання на високому рівні, а підтримка з боку
                      команди завжди допомагає досягати нових вершин. Рекомендую
                      всім, хто прагне покращити свої навички в дзюдо!
                    </p>
                    <h4 className="testimonial-name">{item.name}</h4>
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
  );
};

export default Testimonial;
