import Link from "next/link";
import React, { useState } from "react";

import { ADVANTAGES_STEPS } from "@/constants/home";

const Advantages = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="row align-items-center">
      {ADVANTAGES_STEPS.map((item, index) => (
        <div className="col-xl-4 col-md-6 mb-4 wow fadeInLeft" key={index}>
          <div
            onMouseEnter={() => setActiveIndex(index)}
            className={`icon-bx-wraper style-5 ${activeIndex === index ? "active" : ""}`}
          >
            <div className="icon-bx m-b20">
              <div className="icon-cell text-primary">
                <i className={item.icon}></i>
              </div>
            </div>
            <div className="icon-content">
              <h4 className="dz-title m-b10">
                <Link href="/about-us">{item.title}</Link>
              </h4>
              <p className="m-b15">{item.description}</p>
              <Link href="/about-us" className="read-more">
                Детальніше <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="badge">
              <span>{item.num}</span>
            </div>
            {item.svg}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Advantages;
