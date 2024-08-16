"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { WORKOUTS_SLIDER_ITEMS } from "../_constants";

const WorkoutSlider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <>
      <Swiper
        className="swiper portfolio-slider"
        slidesPerView={"auto"}
        spaceBetween={0}
        loop={true}
        speed={1500}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' + className + '"> 0' + (index + 1) + "</span>"
            );
          },
        }}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation, Pagination]}
      >
        {WORKOUTS_SLIDER_ITEMS.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={`dz-box style-1 ${item.changeStyle}`}>
              <div className="dz-media">
                <Link href={"/gallery"}>
                  <Image
                    src={item.image}
                    width={340}
                    height={250}
                    quality={100}
                    alt="Workout"
                    title="Our workout"
                  />
                </Link>
              </div>
              <div className="dz-info">
                <h3 className="title">
                  <Link href={"/gallery"}>{item.title}</Link>
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="container">
          <div className="num-pagination">
            <div
              className="portfolio-button-prev btn-prev dark"
              ref={navigationPrevRef}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div
              className="swiper-pagination dark style-1 m-lr-lg"
              ref={paginationRef}
            ></div>
            <div
              className="portfolio-button-next btn-next dark"
              ref={navigationNextRef}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default WorkoutSlider;
