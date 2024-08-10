import Link from "next/link";
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
                    <Link className="text-black" href="tel:+380969795892">
                      096-979-58-92
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dz-topbar-right">
                <ul>
                  <li>
                    <i className="fa-regular fa-clock"></i> З 13:00 до 20:00
                  </li>{" "}
                  <li>
                    <i className="fa-solid fa-location-crosshairs"></i> 
                      вул. Василія Липківського, 36, Київ
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`sticky-header navbar-expand-lg ${
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
