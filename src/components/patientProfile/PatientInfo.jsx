import React from "react";
import "../../styles/patientProfile.css";

const PatientInfo = () => {
  const patientData = {
    name: "nombre",
    lastName: "apellido",
    old: "edad",
    cc: "cc",
    email: "correo electronico",
    rh: "tipo de sangre",
    eps: "eps",
    movil: "celular",
    phone: "fijo",
    allergies: "alergias",
    basePathology: "patologias de base",
    companion: "nombre acompañante",
    companionMovil: "celular del acompañante",
  };
  return (
    <div className="border patient-Info-Container">
      Información del paciente
      <div className="global">
        <div className="mensajes">
          <div className="texto">{patientData.name}</div>
          <div className="texto">{patientData.lastName}</div>
          <div className="texto">{patientData.old}</div>
          <div className="texto">{patientData.cc}</div>
          <div className="texto">{patientData.email}</div>
          <div className="texto">{patientData.rh}</div>
          <div className="texto">{patientData.eps}</div>
          <div className="texto">{patientData.movil}</div>
          <div className="texto">{patientData.phone}</div>
          <div className="texto">{patientData.allergies}</div>
          <div className="texto">{patientData.basePathology}</div>
          <div className="texto">{patientData.companion}</div>
          <div className="texto">{patientData.companionMovil}</div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
