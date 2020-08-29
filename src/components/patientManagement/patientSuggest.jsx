import React, { useState } from 'react';
import '../../styles/patientSuggest.css';
import { getPatient } from '../../actions/patientActions.jsx';
import { useSearchDispatch } from '../../store/searchProvider';
import { useHomeBoardDispatch } from '../../store/homeBoardProvider';
import { toast } from 'react-toastify';
import { useUserDispatch } from '../../store/userProvider';

const PatientSuggest = (user) => {
  const [userName, setUserName] = useState(user.user.nombre);
  const homeBoardDispatch = useHomeBoardDispatch();
  const [userCc, setUserCc] = useState(user.cc);
  const searchDispatch = useSearchDispatch();
  const userDispatch = useUserDispatch();

  const openEditPatient = () => {
    getPatient(userCc).then((data) => {
      if (data === false) {
        toast.warn('Problemas de conexion, intentelo de nuevo');
      } else if (data.status === false) {
        toast.error(
          'El usuario no existe. Verifique e intentelo de nuevo'
        );
      } else if (data && data.status === true) {
        homeBoardDispatch({ type: 'SET_STATE', payload: 'editPatient' });
        userDispatch({ type: 'USER_TO_EDIT', payload: data })
      }
    });
  };

  const openPatientProfile = () => {
    getPatient(userCc).then((data) => {
      if (data === false) {
        toast.warn('Problemas de conexion, intentelo de nuevo');
      } else if (data.status === false) {
        toast.error(
          'El usuario no existe. Verifique e intentelo de nuevo'
        );
      } else if (data && data.status === true) {
        searchDispatch({ type: 'SET_USER', payload: data });
        homeBoardDispatch({ type: 'SET_STATE', payload: 'patientProfile' });
      }
    });
  };

  const openAppointmentManagement = () => {
    homeBoardDispatch({ type: 'SET_STATE', payload: 'AppointmentManagement' });
  };

  return (
    <div className="row border patient-suggest-container">
      <div className="col-4 suggest-name">{userName}</div>
      <div className="mb-1 col-8 row">
        <button className="col-3 btn suggest-button" onClick={() => openPatientProfile()}>PERFIL</button>
        <button className="col-3 btn suggest-button" onClick={() => openEditPatient()}>EDITAR</button>
        <button className="col-5 btn suggest-button" onClick={() => openAppointmentManagement()}>AGENDAR CITA</button>
      </div>
    </div>
  );
};

export default PatientSuggest;
