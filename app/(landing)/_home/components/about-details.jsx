import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { SERVICES } from "../constants";

const AboutDetails = () => {
  return (
    <>
      <div className="col-lg-6 about-content m-lg-t40 wow fadeInUp">
        <div className="section-head style-1">
          <p className="sub-title mb-0">Готові розпочати свій шлях у дзюдо?</p>
          <h1 className="title mb-0">
            <span>Школа дзюдо Георгія Зантарая</span>
          </h1>
          <p className="description m-b10">
            Тренуйтеся з найкращими експертами дзюдо!
          </p>
        </div>
        <p>
          Ваша подорож у світ дзюдо починається тут і зараз. Наша школа пропонує
          професійне навчання під керівництвом досвідчених тренерів. Ми
          забезпечимо вас усім необхідним для досягнення високих результатів:
          від розвитку техніки та фізичної підготовки до підготовки до змагань і
          тактичного спарингу.
        </p>
        <ul className="pr-list list-italic m-t30 m-b35">
          {SERVICES.map((item, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={faCheck} />
              {item.title}
            </li>
          ))}
        </ul>
        <Link
          href={"/about-us"}
          className="btn btn-skew btn-lg btn-primary shadow-primary"
        >
          <span>Детальніше</span>
        </Link>
      </div>
    </>
  );
};

export default AboutDetails;
