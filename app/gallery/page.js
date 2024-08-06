"use client";

import React from "react";
import LightGallery from "lightgallery/react";

import {
  BLOGGRID1,
  BLOGGRID2,
  BLOGGRID3,
  BLOGGRID4,
  BLOGGRID5,
} from "@/constants";
import Breadcrumbs from "@/components/shared/breadcrumbs";
import WorkoutSlider from "@/components/shared/workout-slider";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const galleryBlog = [
  { image: BLOGGRID1 },
  { image: BLOGGRID2 },
  { image: BLOGGRID3 },
];

const boxGrid = [
  { image: BLOGGRID4, coloumn: "col-xl-3" },
  { image: BLOGGRID5, coloumn: "col-xl-6" },
  { image: BLOGGRID1, coloumn: "col-xl-3" },
];

const Gallery = () => {
  const onInit = () => {};

  return (
    <>
      <div className="page-wraper">
        <div className="page-content bg-white">
          <Breadcrumbs activePage="Gallery" parentTitle="Home" />
          <div className="content-inner-2">
            <div className="container">
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="row lightgallery justify-content-center"
                getCaptionFromTitleOrAlt={false}
                alignThumbnails="left"
              >
                {galleryBlog.map((data, ind) => (
                  <div
                    className="col-xl-4 col-md-6 m-lg-b30"
                    key={ind}
                    data-src={data.image}
                  >
                    <div className="dz-box gallery">
                      <div className="dz-media">
                        <img src={data.image} alt="gallery" />
                      </div>
                      <div className="content">
                        <span className="view-btn lightimg" title="">
                          <i className="fa-solid fa-plus"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </LightGallery>
            </div>
          </div>
          <div className="content-inner">
            <div className="container">
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="row lightgallery justify-content-center"
                getCaptionFromTitleOrAlt={false}
                alignThumbnails="left"
              >
                {boxGrid.map((data, index) => (
                  <div
                    className={`col-md-6 m-lg-b30 ${data.coloumn}`}
                    key={index}
                    data-src={data.image}
                  >
                    <div className="dz-box gallery img-cover-1">
                      <div className="dz-media img-cover-1">
                        <img src={data.image} className="img-cover-3" alt="" />
                      </div>
                      <div className="content">
                        <span
                          data-exthumbimage={data.image}
                          data-src={data.image}
                          className="view-btn lightimg"
                          title=""
                        >
                          <i className="fa-solid fa-plus"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </LightGallery>
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
              <path
                d="M577 0L-16 107L635 45L577 0Z"
                fill="var(--primary-dark)"
              />
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
      </div>
    </>
  );
};

export default Gallery;
