import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ModalVideo from "react-modal-video";

import { IMAGES } from "../constants/theme";
import MainBanner3 from "../components/MainBanner3";
import { AboutServicesDetails } from "../components/AboutServices";
import Portfolio from "../components/Portfolio";
import Home3testimonial from "../components/Home3testimonial";
import ContectInfo from "../components/ContectInfo";
import HomebannerCard from "../elements/HomebannerCard";
import IconBox from "../elements/IconBox";

const Home3 = () => {
  const [open, setOpen] = useState(false);
  const swiperRef = useRef(null);
  const location = useLocation().pathname;

  useEffect(() => {
    const body = document.querySelector("body");
    body.setAttribute("data-theme-color", "color_5");
    localStorage.setItem("theme", "color_5");
    localStorage.setItem("themeInd", 2);
  }, [location]);

  return (
    <>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={open}
        videoId="X_9VoqR5ojM"
        onClose={() => setOpen(false)}
      />
      <div className="page-content bg-white">
        <div className="main-bnr-two">
          <div
            className="banner-inner"
            style={{
              backgroundImage: `url(${IMAGES.BackgroundBg15})`,
              backgroundSize: " cover",
            }}
          >
            <MainBanner3 open={setOpen} />
          </div>
        </div>
        <section className="clearfix section-wrapper1">
          <div className="container">
            <HomebannerCard />
          </div>
        </section>
        <section
          className="about-bx3"
          style={{
            backgroundImage: ` url(${IMAGES.BgImage8})`,
            backgroundPosition: " center",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="content-inner">
            <div className="container">
              <div className="row align-items-end">
                <AboutServicesDetails />
                <div className="col-lg-6 m-md-b30">
                  <div className="dz-media p-r20">
                    <img
                      src={IMAGES.aboutPicZantaraia}
                      alt="Zantaraia"
                      className="wow fadeInUp"
                      data-wow-delay="0.4s"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="content-inner section-wrapper-1"
          style={{
            backgroundImage: ` url(${IMAGES.BgImage7})`,
            backgroundSize: " cover",
            backgroundRepeat: " no-repeat",
          }}
        >
          <div className="container">
            <IconBox />
          </div>
        </section>
        <section className="half-shape-top-w content-inner-2 clearfix">
          <Portfolio />
        </section>
        <section
          className="content-inner testimonial-swiper-wrapper-3"
          style={{
            backgroundImage: `url(${IMAGES.BgImage9})`,
            backgroundPosition: " center",
            backgroundSize: " 100%",
          }}
        >
          <div className="container">
            <div className="section-head style-1 text-center">
              <h5 className="sub-title wow fadeInUp">TESTIMONIAL</h5>
              <h2 className="title wow fadeInUp">
                What <span className="text-primary">Client</span> Say’s
              </h2>
            </div>
            <Home3testimonial refVal={swiperRef} />
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
        </section>
        <section
          className="content-inner-2 theme-bg contact-section style-2"
          style={{
            backgroundImage: ` url(${IMAGES.BgImage10})`,
            backgroundPosition: " center",
          }}
        >
          <div className="container">
            <ContectInfo />
          </div>
        </section>
        <div className="map z-index-none">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40663.595985020795!2d30.433361728057005!3d50.432257171290516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf54fcd2e17b%3A0xe59b1fd3955732ac!2sShkola%20Dzyudo%20Heorhiya%20Zantaraya!5e0!3m2!1sen!2sua!4v1722780764704!5m2!1sen!2sua"
            style={{
              border: "0",
              marginBottom: "-7px",
              width: "100%",
              height: "400px",
            }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Home3;
