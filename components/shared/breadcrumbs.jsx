import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import JsonLd from "./json-ld";

const Breadcrumbs = ({ parentTitle, activePage }) => {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: parentTitle,
        item: "https://zantaraia-judo-school.pp.ua",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: activePage,
      },
    ],
  };

  return (
    <>
      <JsonLd schema={jsonLd} />
      <div
        className="dz-bnr-inr style-1 text-center"
        data-text="JUDO"
        style={{ backgroundImage: "url(/images/background/bg2.png)" }}
      >
        <div className="container">
          <div className="dz-bnr-inr-entry">
            <h1>{activePage}</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href={"/"}>{parentTitle}</Link>
                </li>
                <FontAwesomeIcon icon={faAngleRight} />
                <li className="breadcrumb-item active" aria-current="page">
                  {activePage}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
