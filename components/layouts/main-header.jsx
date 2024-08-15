import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

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
                    <FontAwesomeIcon icon={faPhone} />
                    <Link className="text-black" href="tel:+380931517748">
                        +38 (093) 151 77 48
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dz-topbar-right">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faClock} /> З 08:00 до 20:00
                  </li>{" "}
                  <li>
                    <FontAwesomeIcon icon={faLocationDot} />
                    вул. Василя Липківського, 36, Київ
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
