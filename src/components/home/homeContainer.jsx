import React from 'react';
import { logOut } from '../../actions/loginActions';
import Calendar from '../calendar/calendar';
import PatientProfile from '../patientProfile/patientProfile';
import '../../styles/home.css';

const Home = () => {
  const logOutFetch = () => {
    logOut();
  }
  return (
    <div >
      <div className="row home-container w-100">
        <div className="border col-3 principal-Container">
          <h4> NOMBRE DEL DOCTOR </h4>
          <h4> NOMBRE DEL CONSULTORIO </h4>
          <div className="border w-100">
            <p> CALENDAR </p>
          </div>
          <button onClick={() => logOutFetch()}>
            Gestionar Cita
          </button>
          <button onClick={() => logOutFetch()}>
            Gestionar Paciente
          </button>
          <button onClick={() => logOutFetch()}>
            Cerrar Sesion
          </button>
        </div>
        <div className="border col-9 principal-Container">
          {/* <Calendar /> */}
          <PatientProfile />
        </div>
      </div>
    </div>
  );
};

export default Home;
