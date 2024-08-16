import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

import { SOCIALS } from "../constants";

const ContactInfo = () => {
  return (
    <>
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-6 col-md-12  col-xl-5 contact-box2">
          <div className="m-b60 col-10">
            <div className="section-head style-1 wow fadeInUp">
              <h2 className="title m-0">
                Контактна <span>інформація</span>
              </h2>
              <p className="m-t10">
                Зв’яжіться з нами, і наша команда відповість протягом 24 годин.
              </p>
            </div>
            <address className="widget widget_get-in-touch m-0 wow fadeInUp">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p className="text-dark mb-0">
                    вул. Василя Липківського, 36, Київ
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <a className="text-dark" href="tel:+380931517748">
                    +38 (093) 151 77 48
                  </a>
                </li>
              </ul>
            </address>
            <p className="m-b15 wow fadeInUp fw-bold text-black">
              Ми в соцмережах
            </p>
            <div className="dz-social-icon style-1  wow fadeInUp">
              <ul>
                {SOCIALS.map((item, index) => (
                  <li key={index}>
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      href={item.link}
                    >
                      <FontAwesomeIcon icon={item.icon} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12  col-xl-5 contact-box2">
          <div className="widget widget_working style-2 mb-4 mb-lg-0 bg-dark wow fadeInUp">
            <ul>
              <li>
                <span className="days">Понеділок - П'ятниця:</span>
                <span className="time">
                  <Link href="/schedule">08:00 - 20:00</Link>
                </span>
              </li>
              <li>
                <span className="days">Неділя:</span>
                <span className="time">Вихідний</span>
              </li>
              <li>
                <span className="days">Субота:</span>
                <span className="time">
                  <Link href="/schedule">08:00 - 13:00</Link>
                </span>
              </li>
              <li>
                <Link
                  className="btn btn-primary rounded-0 btn-skew"
                  href="/schedule"
                >
                  <span>Детальніше</span>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
