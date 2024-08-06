import Link from "next/link";
import React from "react";

const serviceList = [
  { title: "Personal Training" },
  { title: "Body Building" },
  { title: "Boxing Classess" },
  { title: "Cardio And More" },
  { title: "Personal Training" },
  { title: "Body Building" },
  { title: "Boxing Classess" },
  { title: "Cardio And More" },
];

const AboutServicesDetails = () => {
  return (
    <>
      <div className="col-lg-6 about-content m-lg-t40 wow fadeInUp">
        <div className="section-head style-1">
          <h5 className="sub-title">WAKE UP IT'S TIME</h5>
          <h2 className="title mb-0">
            Take The <span> Action </span>
          </h2>
          <p className="description m-b10">
            Start your training with our Professional Trainers
          </p>
        </div>
        <p>
          Nunc vulputate urna ut erat posuere accumsan. Curabitur ut commodo
          mauris, ac volutpat dui. Nullam eget enim ut mi bibendum ultrices.
          Pellentesque non feugia.
        </p>
        <ul className="pr-list list-italic m-t30 m-b35">
          {serviceList.map((item, ind) => (
            <li key={ind}>
              <i className="flaticon-check-mark"></i>
              {item.title}
            </li>
          ))}
        </ul>
        <Link
          href="/about-us"
          className="btn btn-skew btn-lg btn-primary shadow-primary"
        >
          <span>Get Started</span>
        </Link>
      </div>
    </>
  );
};

export default AboutServicesDetails;