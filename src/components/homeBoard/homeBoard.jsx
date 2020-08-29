import React, { useState, useEffect } from 'react';
import { useHomeBoardState } from '../../store/homeBoardProvider';
import PatientProfile from '../patientProfile/patientProfile';
import PatientManagement from '../patientManagement/patientManagement';
import Calendar from '../calendar/calendar';
import PoseNet from '../cameraFlow/camera';
import EditPatient from '../editProfile/editProfile';
import Form from '../calendar/Form';
import '../../styles/homeBoard.css';

const HomeBoard = () => {
  const { toOpen } = useHomeBoardState();
  const [componentToShow, toggleComponet] = useState(<h1> ESTE TABLERO CAMBIA SEGUN LA SELECCION DEL BOTON </h1>);

  useEffect(() => {
    if (toOpen) {
      switch (toOpen) {
      case 'notFound':
        toggleComponet(<h1>EL PACIENTE NO EXISTE</h1>);
        break;
      case 'patientProfile':
        toggleComponet(<PatientProfile />);
        break;
      case 'calendar':
        toggleComponet(<Calendar />);
        break;
      case 'posenet':
        toggleComponet(<PoseNet />);
        break;
      case 'modal':
        toggleComponet(<PatientManagement />);
        break;
      case 'editPatient':
        toggleComponet(<EditPatient />);
        break;
      case 'AppointmentManagement':
        toggleComponet(<Form />);
        break;
      default:
        toggleComponet(<h1>ESTE TABLERO CAMBIA SEGUN LA SELECCION DEL BOTON</h1>);
      }
    }
  }, [toOpen]);

  return (
    <div className="principal-container">
      {componentToShow}
    </div>
  );
};

export default HomeBoard;
