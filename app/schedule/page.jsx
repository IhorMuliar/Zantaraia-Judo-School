import Breadcrumbs from "@/components/shared/breadcrumbs";
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
    images: [
      {
        url: 'https://zantaraia-judo-school.pp.ua/opengraph-image.jpg',
        alt: 'Zantaraia Judo School',
      },
    ],
  },
};

const Schedule = () => {
  return (
    <>
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
