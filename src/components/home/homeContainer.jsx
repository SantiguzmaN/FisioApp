import React, { useEffect } from 'react';
import { logOut } from '../../actions/loginActions';
import { useUserState } from '../../store/userProvider';

import PatientProfile from '../patientProfile/patientProfile';
import '../../styles/home.css';
import { useState } from 'react';

const Home = () => {
  const { user } = useUserState();
  const [userName, setUserName] = useState('USER NAME');

  useEffect(() => {
    if (user) {
      setUserName(user.userName);
    }
  }, []);
  const logOutFetch = () => {
    logOut();
  }

  return (
    <div >
      <div className="row home-container w-100">
        <div className="border col-3 principal-Container">
          <h4> {userName} </h4>
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
