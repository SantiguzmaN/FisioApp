import React, { useEffect, useState } from 'react';
import { logOut } from '../../actions/loginActions';
import { useUserState } from '../../store/userProvider';
import PoseNet from '../cameraFlow/camera'
//import Calendar from '../calendar/calendar';
import PatientProfile from '../patientProfile/patientProfile';
import '../../styles/home.css';

const Home = () => {
  const { user } = useUserState();
  const [userName, setUserName,] = useState('USER NAME');

  useEffect(() => {
    if (user) {
      setUserName(user.userName);
    }
  }, []);
  const logOutFetch = () => {
    logOut();
  };

  return (
    <div>
      <div className="row home-container w-100">
        <div className="border col-3 principal-Container">
          <h4>
            {userName}
          </h4>
          <h4> NOMBRE DEL CONSULTORIO </h4>
          <div className="border w-100">
            {/* here must go the calendar */}
          </div>
          <button type="button" onClick={() => logOutFetch()}>
            Gestionar Cita
          </button>
          <button type="button" onClick={() => logOutFetch()}>
            Gestionar Paciente
          </button>
          <button type="button" onClick={() => logOutFetch()}>
            Cerrar Sesion
          </button>
        </div>
        <div id='root' className="border col-9 principal-Container">
          <PoseNet />
          {/*<Calendar />*/}
          {/*<PatientProfile />*/}
        </div>
      </div>
    </div>
  );
};

export default Home;
