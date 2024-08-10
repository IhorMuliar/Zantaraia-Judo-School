import Link from "next/link";
import Image from "next/image";

import Breadcrumbs from "@/components/shared/breadcrumbs";
import { TEAM_MEMBERS } from "@/constants";

export const metadata = {
  title: "Команда",
  description:
    "Знайомтесь з командою Zantaraia Judo School: досвідчені тренери та наставники, що допомагають нашим учням досягати успіхів у дзюдо.",
  keywords: [
    "Команда дзюдо школи",
    "Тренери дзюдо",
    "Наставники клубу",
    "Професіонали дзюдо",
  ],
  openGraph: {
    url: "/team",
  },
};

const Team = () => {
  return (
    <>
      <Breadcrumbs parentTitle="Головна" activePage="Команда" />
      <section className="content-inner">
        <div className="container">
          <div className="row ">
            {TEAM_MEMBERS.map((item, index) => (
              <div className="col-lg-4 col-sm-6 m-b30" key={index}>
                <div className="dz-team style-1">
                  <div className="dz-media">
                    <Image
                      src={item.image}
                      width={285}
                      height={475}
                      alt="Coach"
                      quality={100}
                    />
                    <ul className="team-social">
                      <li>
                        <Link
                          target="_blank"
                          href={item.facebook}
                          rel="noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          href={item.instagram}
                          rel="noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dz-content ">
                    <h4 className="dz-name">{item.title}</h4>
                    <span className="dz-position">{item.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
