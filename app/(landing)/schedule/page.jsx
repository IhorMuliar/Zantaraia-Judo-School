import Breadcrumbs from "@/components/shared/breadcrumbs";
import JsonLd from "@/components/shared/json-ld";
import ScheduleTable from "./_components/schedule-table";

export const metadata = {
  title: "Розклад тренувань дзюдо",
  description:
    "Перегляньте гнучкий розклад тренувань дзюдо в школі Георгія Зантарая та оберіть зручний час для занять.",
  openGraph: {
    url: "/schedule",
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
    canonical: "/schedule",
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
  name: "Розклад тренувань дзюдо",
  description:
    "Перегляньте гнучкий розклад тренувань дзюдо в школі Георгія Зантарая та оберіть зручний час для занять.",
  url: `${process.env.NEXT_PUBLIC_SITE_URL}/schedule`,
  inLanguage: "uk",
};

const Schedule = () => {
  return (
    <>
      <JsonLd schema={webSiteJsonLd} />
      <JsonLd schema={webPageJsonLd} />
      <Breadcrumbs parentTitle="Головна" activePage="Розклад" />
      <div className="content-inner-1">
        <div className="container">
          <div className="schedule-table table-responsive">
            <ScheduleTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
