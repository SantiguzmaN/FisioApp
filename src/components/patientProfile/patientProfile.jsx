import React from "react";
import Avatar from "../patientProfile/Avatar";
import PatientRecord from "../patientProfile/PatientRecord";
import PatientInfo from "../patientProfile/PatientInfo";
import AppointmentGR from "../patientProfile/AppointmentGR";
import { useState } from "react";

const PatientProfile = () => {
  const [panel, setPanel] = useState(<React.Fragment />);
  return (
    <div classNamerow="w-100">
      <div className="row">
        <div className="col-4">
          <Avatar />
          <PatientRecord />
          <button className="button">Reporte grafico</button>
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
