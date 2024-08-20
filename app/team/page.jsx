import Breadcrumbs from "@/components/shared/breadcrumbs";
import JsonLd from "@/components/shared/json-ld";

import TeamMember from './_components/team-member';
import { TEAM_MEMBERS } from "./_constants";

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
  alternates: {
    canonical: "/team",
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zantaraia Judo School",
  url: "https://zantaraia-judo-school.pp.ua",
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Команда - Zantaraia Judo School",
  description:
    "Знайомтесь з командою Zantaraia Judo School: досвідчені тренери та наставники, що допомагають нашим учням досягати успіхів у дзюдо.",
  url: "https://zantaraia-judo-school.pp.ua/team",
  inLanguage: "uk",
};

const Team = () => {
  return (
    <>
      <JsonLd schema={webSiteJsonLd} />
      <JsonLd schema={webPageJsonLd} />
      <Breadcrumbs parentTitle="Головна" activePage="Команда" />
      <section className="content-inner">
        <div className="container">
          <div className="row">
            {TEAM_MEMBERS.map((member) => (
              <TeamMember key={member.title} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
