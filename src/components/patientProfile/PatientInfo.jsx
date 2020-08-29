import React from 'react';
import '../../styles/patientProfile.css';
import Patient from '../patient/patient';

const PatientInfo = () => {
  return (
    <div className="border patient-Info-Container">
      <h5 className="usercolor">Información del paciente</h5>
      <div className="global">
        <Patient />
      </div>
    </div>
  );
};

export default PatientInfo;
