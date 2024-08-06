"use client";

import React, { useRef } from "react";

import {
  BACKGROUNDBG15,
  BACKGROUNDBG7,
  BACKGROUNDBG8,
  BACKGROUNDBG9,
  BACKGROUNDBG10,
  ABOUTPICZANTARAIA,
  MAINSLIDERPIC,
} from "@/constants";
import AboutDetails from "@/components/home/about-details";
import ContactInfo from "@/components/home/contact-info";
import Portfolio from "@/components/home/portfolio";
import Testimonial from "@/components/home/testimonial";
import Advantages from "@/components/home/advantages";
import InfoCards from "@/components/home/info-cards";

const Home = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="page-content bg-white">
        <div className="main-bnr-two">
          <div
            className="banner-inner"
            style={{
              backgroundImage: `url(${BACKGROUNDBG15})`,
              backgroundSize: " cover",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner-media">
                    <img
                      src={MAINSLIDERPIC}
                      className="main-img"
                      alt="Main banner"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="clearfix section-wrapper1">
          <div className="container">
            <InfoCards />
          </div>
        </section>
        <section
          className="about-bx3"
          style={{
            backgroundImage: ` url(${BACKGROUNDBG8})`,
            backgroundPosition: " center",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="content-inner">
            <div className="container">
              <div className="row align-items-end">
                <AboutDetails />
                <div className="col-lg-6 m-md-b30">
                  <div className="dz-media p-r20">
                    <img
                      src={ABOUTPICZANTARAIA}
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
            backgroundImage: ` url(${BACKGROUNDBG7})`,
            backgroundSize: " cover",
            backgroundRepeat: " no-repeat",
          }}
        >
          <div className="container">
            <Advantages />
          </div>
        </section>
        <section className="half-shape-top-w content-inner-2 clearfix">
          <Portfolio />
        </section>
        <section
          className="content-inner testimonial-swiper-wrapper-3"
          style={{
            backgroundImage: `url(${BACKGROUNDBG9})`,
            backgroundPosition: " center",
            backgroundSize: " 100%",
          }}
        >
          <div className="container">
            <div className="section-head style-1 text-center">
              <h5 className="sub-title wow fadeInUp">ВІДГУКИ</h5>
              <h2 className="title wow fadeInUp">
                Що <span className="text-primary">Клієнти</span> кажуть про нас
              </h2>
            </div>
            <Testimonial refVal={swiperRef} />
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
            backgroundImage: ` url(${BACKGROUNDBG10})`,
            backgroundPosition: " center",
          }}
        >
          <div className="container">
            <ContactInfo />
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

export default Home;
