import React from "react";

const PatientRecord = () => {
  let onClick = () => {
    return alert("entra");
  };
  const citas = ["cita uno", "cita dos", "cita tres"];
  return (
    <div className="patient-record-container ">
      <h5>Historial</h5>
      {citas.map((item) => (
        <p className="border" onClick={onClick}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default PatientRecord;
