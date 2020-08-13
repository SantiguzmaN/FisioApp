import React from 'react';
import Avatar from './Avatar';
import PatientRecord from './PatientRecord';
import PatientInfo from './PatientInfo';
import AppointmentGR from './AppointmentGR';
import Patient from '../patient/patient';

const PatientProfile = () => {
  return (
    <div className="w-100">
      <div className="row">
        <div className="col-4 childenConteiner">
          <h4 className="usercolor">{Patient.name}</h4>
          <Avatar />
          <PatientRecord />
          <button type="button" className="button btn btn-info btn-block my-4" >Reporte grafico</button>
        </div>
        <div className="border col-8 texto childenConteiner2">
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
