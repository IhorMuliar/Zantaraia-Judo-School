"use client";

import ImageGallery from "react-image-gallery";

import WorkoutSlider from "@/components/shared/workout-slider";
import { GALLERY_ITEMS } from "@/constants";

import "react-image-gallery/styles/css/image-gallery.css";

const GallerySlider = () => {
  return (
    <>
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
    </>
  );
};

export default GallerySlider;
