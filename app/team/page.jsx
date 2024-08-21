import Breadcrumbs from "@/components/shared/breadcrumbs";
import JsonLd from "@/components/shared/json-ld";

import TeamMember from "./_components/team-member";
import { TEAM_MEMBERS } from "./_constants";

export const metadata = {
  title: "Команда",
  description:
    "Знайомтесь з командою Zantaraia Judo School: досвідчені тренери та наставники, що допомагають нашим учням досягати успіхів у дзюдо.",
  openGraph: {
    url: "/team",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/opengraph-image.jpg`,
        alt: "Zantaraia Judo School",
      },
    ],
    type: "website",
    locale: "uk",
  },
  alternates: {
    canonical: "/team",
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zantaraia Judo School",
  url: process.env.NEXT_PUBLIC_SITE_URL,
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Команда - Zantaraia Judo School",
  description:
    "Знайомтесь з командою Zantaraia Judo School: досвідчені тренери та наставники, що допомагають нашим учням досягати успіхів у дзюдо.",
  url: `${process.env.NEXT_PUBLIC_SITE_URL}/team`,
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
