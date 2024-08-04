import React from 'react';

import PageTitle from '../elements/PageTitle';
import ScheduleTable from '../elements/ScheduleTable';

const Schedule = () => {
    return (
        <>
            <div className="page-content bg-white">
                <PageTitle activePage="Schedule" parentTitle="Home" />    
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