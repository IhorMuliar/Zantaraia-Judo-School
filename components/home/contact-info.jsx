import Link from "next/link";
import React from "react";

const socials = [
  { icon: "fab fa-facebook-f", link: "https://www.facebook.com/GZJudoSchool/" },
  {
    icon: "fab fa-instagram",
    link: "https://www.instagram.com/zantaraia_school",
  },
  {
    icon: "fa-brands fa-tiktok",
    link: "https://www.tiktok.com/@zantaraia_school?_t=8et0vHMb2m5&_r=1",
  },
];

const ContactInfo = () => {
  return (
    <>
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-6 col-md-12  col-xl-5 contact-box2">
          <div className="m-b60 col-10">
            <div className="section-head style-1 wow fadeInUp">
              <h2 className="title m-0">
                Contact <span>Info</span>
              </h2>
              <p className="m-t10">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
            </div>
            <address className="widget widget_getintuch m-0 wow fadeInUp">
              <ul>
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  <p className="text-dark">Vasylia Lypkivskoho St, 36, Kyiv</p>
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <a className="text-dark" href="tel:+380969795892">
                    096-979-58-92
                  </a>
                </li>
              </ul>
            </address>
            <h6 className="m-b15  wow fadeInUp">Our Socials</h6>
            <div className="dz-social-icon style-1  wow fadeInUp">
              <ul>
                {socials.map((item, ind2) => (
                  <li key={ind2}>
                    <Link
                      target="_blank"
                      className={item.icon}
                      href={item.link}
                    ></Link>
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
                <span className="days">Monday - Friday:</span>
                <span className="time">
                  <Link href="/schedule">13:00 - 20:00</Link>
                </span>
              </li>
              <li>
                <span className="days">Sunday:</span>
                <span className="time">Closed</span>
              </li>
              <li>
                <span className="days">Saturday:</span>
                <span className="time">
                  <Link href="/schedule">09:00 - 13:00</Link>
                </span>
              </li>
              <li>
                <Link
                  className="btn btn-primary rounded-0 btn-skew"
                  href="/schedule"
                >
                  <span> More Here</span>{" "}
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
