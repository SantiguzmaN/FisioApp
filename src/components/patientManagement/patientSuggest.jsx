import React from 'react';
import '../../styles/patientSuggest.css';

const PatientSuggest = () => {

  return (
    <div className="row patient-suggest-container">
      <div className="col-4 suggest-name">Paciente</div>
      <div className="col-8 row">
        <button className="col-3 btn suggest-button">PERFIL</button>
        <button className="col-3 btn suggest-button">EDITAR</button>
        <button className="col-5 btn suggest-button">AGENDAR CITA</button>
      </div>
    </div>
  );
};

export default PatientSuggest;
