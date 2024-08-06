import Link from "next/link";
import React from "react";

import { LOGO, FOOTERCIRCLE } from "../constants";

const Footer = () => {
  let update = new Date();

  return (
    <>
      <footer className="site-footer style-1 footer-action bg-dark">
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-md-12">
                <div className="widget widget_about">
                  <div className="footer-logo  logo-white">
                    <Link href={"/"}>
                      <img
                        className="select_logo_white"
                        src={LOGO}
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <p>
                    A Wonderful Serenity Has Taken Possession Of My Entire Soul,
                    Like These.
                  </p>
                  <h6 className="m-b15">Our Socials</h6>
                  <div className="dz-social-icon style-1">
                    <ul>
                      <li>
                        <Link
                          target="_blank"
                          href="https://www.facebook.com/GZJudoSchool/"
                          rel="noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>{" "}
                      <li>
                        <Link
                          target="_blank"
                          href="https://www.instagram.com/zantaraia_school"
                          rel="noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>{" "}
                      <li>
                        <Link
                          target="_blank"
                          href="https://www.tiktok.com/@zantaraia_school?_t=8et0vHMb2m5&_r=1"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-tiktok"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 wow fadeInUp">
                <div className="widget widget_locations">
                  <h4 className="footer-title">Locations</h4>
                  <div className="clearfix">
                    <h6>Kyiv</h6>
                    <p>Vasylia Lypkivskoho St, 36, Kyiv, Ukraine</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 wow fadeInUp">
                <div className="widget widget_working">
                  <h4 className="footer-title">Working Hours</h4>
                  <ul>
                    <li>
                      <span className="days">Monday - Friday:</span>
                      <span className="time">
                        <Link href={"/schedule"}>07:00 - 21:00</Link>
                      </span>
                    </li>
                    <li>
                      <span className="days">Saturday:</span>
                      <span className="time">
                        <Link href={"/schedule"}>07:00 - 16:00</Link>
                      </span>
                    </li>
                    <li>
                      <span className="days">Sunday:</span>
                      <span className="time">
                        Closed
                      </span>
                    </li>
                  </ul>
                  <Link href={"/schedule"} className="btn-link">
                    More Here <i className="fa-solid fa-arrow-right m-l10"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Bottom Part --> */}
        <div className="container">
          <div className="footer-bottom">
            <div className="text-center">
              <span className="copyright-text">
                Copyright © {update.getFullYear()}{" "}
                <span className="text-yellow">
                  GEORGII ZANTARAIA JUDO SCHOOL 
                </span>
                . All rights reserved.
              </span>
            </div>
          </div>
        </div>
        <img
          className="svg-shape-1 rotate-360"
          src={FOOTERCIRCLE}
          alt="Circle 1"
        />
        <img
          className="svg-shape-2 rotate-360"
          src={FOOTERCIRCLE}
          alt="Circle 2"
        />
      </footer>
    </>
  );
};

export default Footer;
