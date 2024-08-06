import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import { PORTFOLIO1, PORTFOLIO2, PORTFOLIO3 } from "@/constants";

const dataBlog = [
  {
    image: PORTFOLIO1,
    title: "Fitness - Workout Exercises for Fat Loss",
    changestyle: "box-1",
  },
  {
    image: PORTFOLIO2,
    title: "The Worst Advices We've Heard For Health.",
    changestyle: "box-2",
  },
  {
    image: PORTFOLIO3,
    title: "Fitness - Workout Exercises for Fat Loss",
    changestyle: "box-3",
  },
];

const WorkoutSlider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <>
      <Swiper
        className="swiper portfolio-slider"
        // centeredSlides={true}
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
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        modules={[Navigation, Pagination]}
      >
        {dataBlog.map((item, ind) => (
          <SwiperSlide key={ind}>
            <div className={`dz-box style-1 ${item.changestyle}`}>
              <div className="dz-media">
                <Link href={"/portfolio-details"}>
                  <img src={item.image} alt="" />
                </Link>
              </div>
              <div className="dz-info">
                <h3 className="title">
                  <Link href={"/portfolio-details"}>{item.title}</Link>
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
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div
              className="swiper-pagination dark style-1 m-lr-lg"
              ref={paginationRef}
            ></div>
            <div
              className="portfolio-button-next btn-next dark"
              ref={navigationNextRef}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
}
export default WorkoutSlider;
