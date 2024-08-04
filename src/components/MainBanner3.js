import React from "react";
import { Link } from "react-router-dom";

import { IMAGES } from "../constants/theme";

const MainBanner3 = ({ open }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-media">
              <img src={IMAGES.mainSliderPic} className="main-img" alt="Main banner" />
            </div>
          </div>
        </div>
      </div>
      <div className="video-bx5">
        <Link onClick={() => open(true)} className="popup-youtube" to="#">
          <img src={IMAGES.miniSlidePic} alt="" />
          <span className="video-btn  popup-youtube">
            <i className="fa fa-play"></i>
          </span>
        </Link>
      </div>
    </>
  );
};

export default MainBanner3;
