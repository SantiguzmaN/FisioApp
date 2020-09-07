import React from 'react';
import BarChart from './barchart';
import data0 from './barShortData';


const AppointmentGR = () => {
  return (
    <div className="mt-5">
      <BarChart props={data0} section="dashboard" />
    </div>
  );
};

export default AppointmentGR;
