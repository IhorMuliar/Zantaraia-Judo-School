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
};

const Schedule = () => {
  return (
    <>
      <div className="page-content bg-white">
        <Breadcrumbs activePage="Розклад" parentTitle="Головна" />
        <div className="content-inner-1">
          <div className="container">
            <div className="schedule-table table-responsive">
              <ScheduleTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
