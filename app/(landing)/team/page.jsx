import Breadcrumbs from "@/components/shared/breadcrumbs";
import JsonLd from "@/components/shared/json-ld";

import TeamMember from "./_components/team-member";
import { TEAM_MEMBERS } from "./_constants";

export const metadata = {
  title: "Команда школи дзюдо",
  description:
    "Познайомтеся з професійною командою тренерів клубу дзюдо Георгія Зантарая. Досвідчені наставники допоможуть вам досягти успіху!",
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
  alternateName : "Школа Георгія Зантарая",
  url: process.env.NEXT_PUBLIC_SITE_URL,
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Команда школи дзюдо",
  description:
    "Познайомтеся з професійною командою тренерів клубу дзюдо Георгія Зантарая. Досвідчені наставники допоможуть вам досягти успіху!",
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
