import Link from "next/link";
import React from "react";

const cards = [
  { icon: "flaticon-fitness", title: "Our Classes", link: "/about-us" },
  { icon: "flaticon-user", title: "Our Trainers", link: "/team" },
  { icon: "flaticon-medal", title: "Moments with Us", link: "/gallery" },
  { icon: "flaticon-calendar", title: "Our Timeline", link: "/schedule" },
];

const InfoCards = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        {cards.map((item, ind) => (
          <div
            className="col-xl-3 col-sm-6 mb-xl-0 mb-4 wow fadeInUp"
            key={ind}
          >
            <div className="icon-bx-wraper style-4 bg-white">
              <div className="icon-bx m-b20">
                <div className="icon-cell text-primary">
                  <i className={item.icon}></i>
                </div>
              </div>
              <div className="icon-content">
                <h4 className="dz-title m-b10">
                  <Link href={item.link}>{item.title}</Link>
                </h4>
                <p className="m-b15">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link href={item.link} className="read-more">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InfoCards;
