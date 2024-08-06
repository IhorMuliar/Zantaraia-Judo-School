import React from "react";

import Breadcrumbs from "@/components/shared/breadcrumbs";
import ScheduleTable from "@/components/schedule/schedule-table";

const Schedule = () => {
  return (
    <>
      <div className="page-content bg-white">
        <Breadcrumbs activePage="Schedule" parentTitle="Home" />
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
