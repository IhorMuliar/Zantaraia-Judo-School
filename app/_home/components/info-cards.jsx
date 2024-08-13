import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { INFO_CARDS } from "../constants";

const Card = ({ icon, title, description, link }) => (
  <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4 wow fadeInUp">
    <div className="icon-bx-wraper style-4 bg-white">
      <div className="icon-bx m-b20">
        <div className="icon-cell text-primary">
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      <div className="icon-content">
        <h3 className="dz-title m-b10">
          <Link href={link}>{title}</Link>
        </h3>
        <p className="m-b15">{description}</p>
        <Link href={link} className="read-more">
          Детальніше <FontAwesomeIcon icon={faArrowRight} />
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
