import Breadcrumbs from "@/components/shared/breadcrumbs";
import JsonLd from '@/components/shared/json-ld';
import ScheduleTable from "@/components/schedule/schedule-table";

export const metadata = {
  title: "Рокзлад",
  description:
    "Актуальний розклад тренувань у Zantaraia Judo School. Знайдіть зручний час для занять дзюдо для дітей та дорослих.",
  keywords: [
    "Розклад тренувань",
    "Час занять дзюдо",
    "Графік тренувань",
    "Заняття для дітей та дорослих",
  ],
  openGraph: {
    url: "/schedule",
  },
  alternates: {
    canonical: '/schedule',
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
  name: "Розклад - Zantaraia Judo School",
  description:
    "Актуальний розклад тренувань у Zantaraia Judo School. Знайдіть зручний час для занять дзюдо для дітей та дорослих.",
  url: "https://zantaraia-judo-school.pp.ua/schedule",
  inLanguage: "uk",
};

const Schedule = () => {
  return (
    <>
      <JsonLd schema={webSiteJsonLd} />
      <JsonLd schema={webPageJsonLd} />
      <Breadcrumbs activePage="Розклад" parentTitle="Головна" />
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
