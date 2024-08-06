import Link from "next/link";
import React, { useState } from "react";

const iconBox1 = (
  <svg
    width="72"
    height="200"
    viewBox="0 0 72 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.43268 1.49268L69.0001 99.0571L2.00586 198.507"
      stroke="currentColor"
      strokeWidth="4"
    />
  </svg>
);
const iconBox2 = (
  <svg
    width="72"
    height="200"
    viewBox="0 0 72 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.43268 1.49268L69.0001 99.0571L2.00586 198.507"
      stroke="currentColor"
      strokeWidth="4"
    />
  </svg>
);
const iconBox3 = (
  <svg
    width="72"
    height="200"
    viewBox="0 0 72 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.43268 1.49268L69.0001 99.0571L2.00586 198.507"
      stroke="currentColor"
      strokeWidth="4"
    />
  </svg>
);

const boxSVG = [
  {
    icon: "flaticon-exercise-2",
    svg: iconBox1,
    title: "Our Classes",
    num: 1,
  },
  {
    icon: "flaticon-dumbbells",
    svg: iconBox2,
    title: "Health & Fitness",
    num: 2,
  },
  {
    icon: "flaticon-fitness",
    svg: iconBox3,
    title: "Right Nutrition",
    num: 3,
  },
];

const IconBox = () => {
  const [addActive, setActive] = useState(1);

  return (
    <>
      <div className="row align-items-center">
        {boxSVG.map((item, ind) => (
          <div className="col-xl-4 col-md-6 mb-4 wow fadeInLeft" key={ind}>
            <div
              onMouseEnter={() => setActive(ind)}
              className={`icon-bx-wraper style-5 ${
                addActive === ind ? "active" : ""
              }`}
            >
              <div className="icon-bx m-b20">
                <div className="icon-cell text-primary">
                  <i className={item.icon}></i>
                </div>
              </div>
              <div className="icon-content">
                <h4 className="dz-title m-b10">
                  <Link href="/team">{item.title}</Link>
                </h4>
                <p className="m-b15">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <Link href="/team" className="read-more">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
              <div className="badge">
                {" "}
                <span>{item.num}</span>
              </div>
              {item.svg}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IconBox;
