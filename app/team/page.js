import Link from "next/link";
import React from "react";

import { TEAM1, TEAM2, TEAM3, TEAM4, TEAM5, TEAM6 } from "@/constants";
import PageTitle from "@/elements/PageTitle";

const mediaBlog = [
  { images: TEAM1, title: "EMILY" },
  { images: TEAM2, title: "EMMA" },
  { images: TEAM3, title: "OLIVER" },
  { images: TEAM4, title: "ELIJAH" },
  { images: TEAM5, title: "JAMES" },
  { images: TEAM6, title: "AMELIA" },
];

const Team = () => {
  return (
    <>
      <div className="page-content bg-white">
        <PageTitle parentTitle="Home" activePage="Our Team" />
        <section className="content-inner">
          <div className="container">
            <div className="row ">
              {mediaBlog.map((item, index) => (
                <div className="col-lg-4 col-sm-6 m-b30" key={index}>
                  <div className="dz-team style-1">
                    <div className="dz-media">
                      <Link href={"#"}>
                        <img src={item.images} alt="" />
                      </Link>
                      <ul className="team-social">
                        <li>
                          <Link
                            target="_blank"
                            href="https://www.facebook.com/"
                            rel="noreferrer"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            href="https://twitter.com/?lang=en"
                            rel="noreferrer"
                          >
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            href="https://www.instagram.com/?hl=en"
                            rel="noreferrer"
                          >
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dz-content ">
                      <h4 className="dz-name">{item.title}</h4>
                      <span className="dz-position">Yoga trainer</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;
