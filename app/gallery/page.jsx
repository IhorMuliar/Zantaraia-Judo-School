"use client";

import React from "react";
import ImageGallery from "react-image-gallery";

import Breadcrumbs from "@/components/shared/breadcrumbs";
import WorkoutSlider from "@/components/shared/workout-slider";
import { GALLERY_ITEMS } from "@/constants";

import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  return (
    <>
      <div className="page-content bg-white">
        <Breadcrumbs activePage="Галерея" parentTitle="Головна" />
        <div className="content-inner">
          <div className="container">
            <ImageGallery
              items={GALLERY_ITEMS}
              showBullets={true}
              showPlayButton={false}
              showThumbnails={true}
              showFullscreenButton={true}
              additionalClass="row justify-content-center"
            />
          </div>
        </div>
        <section className="content-inner portfolio-wrapper">
          <div className="portfolio-wrapper-inner">
            <div className="container-fluid  p-0">
              <WorkoutSlider />
            </div>
          </div>
          <svg
            className="shape-up"
            width="635"
            height="107"
            viewBox="0 0 635 107"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M577 0L-16 107L635 45L577 0Z" fill="var(--primary-dark)" />
          </svg>
          <svg
            className="shape-down"
            width="673"
            height="109"
            viewBox="0 0 673 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M682 0L0 56L682 109V0Z" fill="var(--primary)" />
          </svg>
        </section>
      </div>
    </>
  );
};

export default Gallery;
