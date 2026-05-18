import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import logoImage from "@/public/images/logo.png";
import hexagonImage from "@/public/images/svg/hexagon.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer style-1 footer-action bg-dark">
      <div className="footer-top">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-md-12">
              <div className="widget widget_about">
                <div className="footer-logo logo-white">
                  <Link href="/">
                    <Image
                      className="select_logo_white"
                      src={logoImage}
                      quality={100}
                      alt="Лого дзюдо школи Георгія Зантарая"
                      title="Лого дзюдо школи Георгія Зантарая"
                    />
                  </Link>
                </div>
                <p className="m-b30">
                  Школа Георгія Зантарая - це навчальний заклад, де діти
                  отримують можливість навчитися основам дзюдо, розвинути
                  фізичну форму та дисципліну.
                </p>
                <p className="m-b15 fw-bold text-white">Ми в соцмережах</p>
                <div className="dz-social-icon style-1 dark">
                  <ul>
                    <li>
                      <Link
                        target="_blank"
                        href="https://www.facebook.com/GZJudoSchool/"
                        rel="noreferrer"
                        aria-label="Facebook"
                      >
                        <FontAwesomeIcon icon={faFacebookF} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        href="https://www.instagram.com/zantaraia_school"
                        rel="noreferrer"
                        aria-label="Instagram"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        href="https://www.tiktok.com/@zantaraia_school?_t=8et0vHMb2m5&_r=1"
                        rel="noreferrer"
                        aria-label="TikTok"
                      >
                        <FontAwesomeIcon icon={faTiktok} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <address className="col-xl-3 col-md-4 wow fadeInUp">
              <div className="widget widget_locations">
                <p className="footer-title text-white">Розташування</p>
                <div className="clearfix">
                  <p className="m-b5 fw-bold text-white">Київ</p>
                  <p>вул. Василя Липківського, 36, Київ</p>
                </div>
              </div>
            </address>
            <div className="col-xl-3 col-md-4 wow fadeInUp">
              <div className="widget widget_working">
                <p className="footer-title text-white">Робочі години</p>
                <ul>
                  <li>
                    <span className="days">Понеділок - П'ятниця:</span>
                    <span className="time">
                      <Link href="/schedule">08:00 - 20:00</Link>
                    </span>
                  </li>
                  <li>
                    <span className="days">Субота:</span>
                    <span className="time">
                      <Link href="/schedule">08:00 - 13:00</Link>
                    </span>
                  </li>
                  <li>
                    <span className="days">Неділя:</span>
                    <span className="time">Вихідний</span>
                  </li>
                </ul>
                <Link href="/schedule" className="btn-link">
                  Детальніше{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="m-l10" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <div className="text-center">
            <span className="copyright-text">
              Copyright © {currentYear}{" "}
              <span className="text-yellow">GEORGII ZANTARAIA JUDO SCHOOL</span>
              . All rights reserved.
            </span>
          </div>
        </div>
      </div>
      <Image
        className="svg-shape-1 rotate-360"
        src={hexagonImage}
        quality={100}
        alt=""
      />
      <Image
        className="svg-shape-2 rotate-360"
        src={hexagonImage}
        quality={100}
        alt=""
      />
    </footer>
  );
};

export default Footer;
