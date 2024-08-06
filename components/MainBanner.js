import React from "react";

import { MAINSLIDERPIC } from "../constants";

const MainBanner = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-media">
              <img src={MAINSLIDERPIC} className="main-img" alt="Main banner" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
