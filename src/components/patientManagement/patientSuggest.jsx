import React, {useState} from 'react';
import '../../styles/patientSuggest.css';

const PatientSuggest = (user) => {
  console.log('usuario', user);
  const [userName, setUserName] = useState(user.user.nombre);
  const [userCc, setUserCc] = useState(user.cc);

  console.log('eaaa', userName);
  return (
    <div className="row border patient-suggest-container">
      <div className="col-4 suggest-name">{userName}</div>
      <div className="mb-1 col-8 row">
        <button className="col-3 btn suggest-button">PERFIL</button>
        <button className="col-3 btn suggest-button">EDITAR</button>
        <button className="col-5 btn suggest-button">AGENDAR CITA</button>
      </div>
    </div>
  );
};

export default PatientSuggest;
