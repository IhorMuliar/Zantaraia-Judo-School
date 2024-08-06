import { useState, useEffect } from "react";

import HomeHeader from "./home-header";

const MainHeader = () => {
  const [headerFix, setHeaderFix] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHeaderFix(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="site-header mo-left header header-transparent style-1">
        <div className="top-bar">
          <div className="container">
            <div className="dz-topbar-inner d-flex justify-content-between align-items-center">
              <div className="dz-topbar-left">
                <ul>
                  <li>
                    <i className="fa fa-phone"></i>
                    <a className="text-black" href="tel:+380969795892">
                      096-979-58-92
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dz-topbar-right">
                <ul>
                  <li>
                    <i className="fa-regular fa-clock"></i> From 13:00 To 20:00
                  </li>{" "}
                  <li>
                    <i className="fa-solid fa-location-crosshairs"></i> Vasylia
                    Lypkivskoho St, 36, Kyiv
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`sticky-header main-bar-wraper navbar-expand-lg ${
            headerFix ? "is-fixed" : ""
          }`}
        >
          <HomeHeader />
        </div>
      </header>
    </>
  );
};

export default MainHeader;
