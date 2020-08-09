import React from 'react';

const PatientRecord = () => {

  const citas = ['cita uno', 'cita dos', 'cita tres'];
  return (
    <div className="patient-record-container">
      <h5>Historial</h5>
      {citas.map((item) => (
        <h6>
          {item}
        </h6>
      ))}
    </div>
  );
};

export default PatientRecord;
