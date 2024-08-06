import Link from "next/link";

import { BGBANNER2 } from "@/constants";

const Breadcrumbs = ({ parentTitle, activePage }) => {
  return (
    <>
      <div
        className="dz-bnr-inr style-1 text-center"
        data-text="JUDO"
        style={{ backgroundImage: "url(" + BGBANNER2 + ")" }}
      >
        <div className="container">
          <div className="dz-bnr-inr-entry">
            <h1>{activePage}</h1>
            <nav aria-label="breadcrumb" className="breadcrumb-row">
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href={"/"}>{parentTitle}</Link>
                </li>{" "}
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
