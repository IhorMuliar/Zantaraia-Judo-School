import Link from "next/link";

import Breadcrumbs from "@/components/shared/breadcrumbs";

export const metadata = {
  title: "Контакти",
  description:
    "Зв'яжіться з Zantaraia Judo School! Адреса, телефон та соціальні мережі для запису на тренування та отримання додаткової інформації.",
  keywords: [
    "Контактні дані",
    "Запис на тренування",
    "Адреса дзюдо школи",
    "Телефон",
  ],
};

const ContactUs = () => {
  return (
    <>
      <div className="page-content bg-white">
        <Breadcrumbs activePage="Контакти" parentTitle="Головна" />
        <section className="content-inner-1 z-index-none">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-xl-5 m-sm-b30 m-xl-b0">
                <div className="contact-box">
                  <h3 className="contact-title">Контактна інформація</h3>
                  <p className="contact-text">
                    Зв’яжіться з нами, і наша команда відповість протягом 24
                    годин.
                  </p>
                  <address className="widget widget_getintuch">
                    <ul>
                      <li>
                        <i className="fa-solid fa-location-dot"></i>
                        <p>вул. Василія Липківського, 36, Київ</p>
                      </li>
                      <li>
                        <i className="fa-solid fa-phone"></i>
                        <a className="text-white" href="tel:+380969795892">
                          096-979-58-92
                        </a>
                      </li>
                    </ul>
                  </address>
                  <h6 className="m-b15 text-white">Ми в соцмережах</h6>
                  <div className="dz-social-icon style-1 dark">
                    <ul>
                      <li>
                        <Link
                          target="_blank"
                          href="https://www.facebook.com/GZJudoSchool/"
                          rel="noreferrer"
                        >
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>{" "}
                      <li>
                        <Link
                          target="_blank"
                          href="https://www.instagram.com/zantaraia_school"
                          rel="noreferrer"
                        >
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>{" "}
                      <li>
                        <Link
                          target="_blank"
                          href="https://www.tiktok.com/@zantaraia_school?_t=8et0vHMb2m5&_r=1"
                          rel="noreferrer"
                        >
                          <i className="fab fa-tiktok" />
                        </Link>
                      </li>{" "}
                    </ul>
                  </div>
                  <svg
                    width="250"
                    height="70"
                    viewBox="0 0 250 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 38L250 0L210 70L0 38Z"
                      fill="url(#paint0_linear_306_1296)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_306_1296"
                        x1="118.877"
                        y1="35.552"
                        x2="250.365"
                        y2="35.552"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="1" stopColor="var(--primary)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="col-md-6 col-xl-7">
                <div className="map-iframe">
                  <iframe
                    title="myFrame"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40663.595985020795!2d30.433361728057005!3d50.432257171290516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf54fcd2e17b%3A0xe59b1fd3955732ac!2sShkola%20Dzyudo%20Heorhiya%20Zantaraya!5e0!3m2!1sen!2sua!4v1722780764704!5m2!1sen!2sua"
                    style={{ border: "0", width: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
