import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { ADVANTAGES_STEPS } from "../constants";
import BigArrow from './big-arrow';

const Advantages = () => {
  return (
    <div className="row align-items-center">
      {ADVANTAGES_STEPS.map((item) => (
        <div className="col-xl-4 col-md-6 mb-4 wow fadeInLeft" key={item.title}>
          <div
            className="icon-bx-wraper style-5"
          >
            <div className="icon-bx m-b20">
              <div className="icon-cell text-primary">
                <FontAwesomeIcon icon={item.icon} />
              </div>
            </div>
            <div className="icon-content">
              <h3 className="dz-title m-b10">
                <Link href={"/about-us"}>{item.title}</Link>
              </h3>
              <p className="m-b15">{item.description}</p>
              <Link href={"/about-us"} className="read-more">
                Детальніше <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
            <div className="badge">
              <span>{item.num}</span>
            </div>
            <BigArrow />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Advantages;
