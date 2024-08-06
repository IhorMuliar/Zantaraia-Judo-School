import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import {
  TESTIMONIALPIC4,
  TESTIMONIALPIC5,
  TESTIMONIALPIC6,
} from "@/constants";

const testimonial = [
  { img: TESTIMONIALPIC4, name: "John doe" },
  { img: TESTIMONIALPIC5, name: "Johnethan Lee" },
  { img: TESTIMONIALPIC6, name: "John doe" },
];
const Testimonial = ({ refVal }) => {
  return (
    <>
      <div className="swiper testimonial-swiper-3">
        <Swiper
          speed={1800}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 1800 }}
          ref={refVal}
          className="swiper-wrapper"
        >
          {testimonial.map((item, ind) => (
            <SwiperSlide className="swiper-slide" key={ind}>
              <div className="testimonial-2 wow fadeInUp">
                <div className="row align-items-xl-center">
                  <div className="col-lg-4">
                    <div className="testimonial-pic">
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-8 ">
                    <div className="testimonial-info">
                      <i className="flaticon-left-quotes-sign quote"></i>
                      <p className="testimonial-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500sLorem
                        Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <h4 className="testimonial-name">{item.name}</h4>
                      <span className="testimonial-position text-primary">
                        Founder
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
