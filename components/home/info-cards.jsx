import Link from "next/link";
import React from "react";

import { INFO_CARDS } from "@/constants/home";

const Card = ({ icon, title, description, link }) => (
  <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4 wow fadeInUp">
    <div className="icon-bx-wraper style-4 bg-white">
      <div className="icon-bx m-b20">
        <div className="icon-cell text-primary">
          <i className={icon}></i>
        </div>
      </div>
      <div className="icon-content">
        <h4 className="dz-title m-b10">
          <Link href={link}>{title}</Link>
        </h4>
        <p className="m-b15">{description}</p>
        <Link href={link} className="read-more">
          Детальніше <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  </div>
);

const InfoCards = () => (
  <div className="row align-items-center justify-content-center">
    {INFO_CARDS.map((card, index) => (
      <Card
        key={index}
        icon={card.icon}
        title={card.title}
        description={card.description}
        link={card.link}
      />
    ))}
  </div>
);

export default InfoCards;
