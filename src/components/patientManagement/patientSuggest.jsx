import React from 'react';
import '../../styles/patientSuggest.css';
import { useHomeBoardDispatch } from '../../store/homeBoardProvider';

const PatientSuggest = () => {

  const homeBoardDispatch = useHomeBoardDispatch();

  const openEditPatient = () => {
    console.log("entra")
    homeBoardDispatch({ type: 'SET_STATE', payload: 'editPatient' });
  };

  return (
    <div className="row patient-suggest-container">
      <div className="col-4 suggest-name">Paciente</div>
      <div className="col-8 row">
        <button className="col-3 btn suggest-button">PERFIL</button>
        <button className="col-3 btn suggest-button" onClick={() => openEditPatient()}>EDITAR</button>
        <button className="col-5 btn suggest-button">AGENDAR CITA</button>
      </div>
    </div>
  );
};

export default PatientSuggest;
