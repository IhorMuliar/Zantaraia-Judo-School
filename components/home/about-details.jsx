import Link from "next/link";
import React from "react";

import { SERVICES } from "@/constants/home";

const AboutDetails = () => {
  return (
    <>
      <div className="col-lg-6 about-content m-lg-t40 wow fadeInUp">
        <div className="section-head style-1">
          <h5 className="sub-title">ГОТОВІ РОЗПОЧАТИ ШЛЯХ У ДЗЮДО?</h5>
          <h2 className="title mb-0">
            <span>Приєднуйтесь!</span>
          </h2>
          <p className="description m-b10">
            Тренування з нашими експертами дзюдо
          </p>
        </div>
        <p>
          Ваша подорож у світ дзюдо починається тут! Наші професійні тренери
          допоможуть вам досягти нових висот. Підходьте до нас для отримання
          індивідуальних порад та тренувань. Залучайтеся до тренувань,
          розвивайте свої навички і досягайте нових вершин разом з нами!
        </p>
        <ul className="pr-list list-italic m-t30 m-b35">
          {SERVICES.map((item, ind) => (
            <li key={ind}>
              <i className="flaticon-check-mark"></i>
              {item.title}
            </li>
          ))}
        </ul>
        <Link
          href="/contact-us"
          className="btn btn-skew btn-lg btn-primary shadow-primary"
        >
          <span>Get Started</span>
        </Link>
      </div>
    </>
  );
};

export default AboutDetails;