import React from 'react';
import Avatar from './Avatar';
import PatientRecord from './PatientRecord';
import PatientInfo from './PatientInfo';
import AppointmentGR from './AppointmentGR';

const PatientProfile = () => {
  return (
    <div className="w-100">
      <div className="row">
        <div className="col-4">
          <Avatar />
          <PatientRecord />
          <button type="button" className="button">Reporte grafico</button>
        </div>
        <div className="border col-8">
          <PatientInfo />
          <div className="border rg-appointment-Container">
            <AppointmentGR />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
