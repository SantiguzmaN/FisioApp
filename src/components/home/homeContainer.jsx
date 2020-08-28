import React, { useEffect, useState } from 'react';
import { logOut } from '../../actions/loginActions';
import { useUserState } from '../../store/userProvider';
import { useHomeBoardDispatch } from '../../store/homeBoardProvider';


import  Calendar   from '../calendar/calendar';
import HomeBoard from '../homeBoard/homeBoard';
import '../../styles/home.css';

const Home = () => {
  const { user } = useUserState();
  const homeBoardDispatch = useHomeBoardDispatch();
  const [userName, setUserName] = useState('USER NAME');
  useEffect(() => {
    if (user) {
      setUserName(user.userName);
    }
  }, []);

  const logOutFetch = () => {
    logOut();
  };

  const openPatientProfile = () => {
    homeBoardDispatch({ type: 'SET_STATE', payload: 'patientProfile' });
  };

  const openCalendar = () => {
    homeBoardDispatch({ type: 'SET_STATE', payload: 'calendar' });
  };

  const openPosenet = () => {
    homeBoardDispatch({ type: 'SET_STATE', payload: 'posenet' });
  };

  const openPatientManagement = () => {
    homeBoardDispatch({ type: 'SET_STATE', payload: 'modal' });
  };

  return (
    <div className="wrapper app">
      <div className="row w-100 h-100 principal-Container">
        <div className="border col-3 childenConteiner">
          <h4 className="usercolor">{userName}</h4>
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/tata.jpg`}
            alt="FISIOAPP"
          />
          <div className="border w-100">
            <Calendar/>
          </div>
          <button type="button" className="btn btn-info btn-block my-4" onClick={() => openPosenet()} >
            Ir al Posenet
          </button>
          <button type="button" className="btn btn-info btn-block my-4" onClick={() => openCalendar()} >
            ir a Calendario
          </button>
          <button type="button" className="btn btn-info btn-block my-4" onClick={() => openPatientProfile()}>
            Gestionar Paciente
          </button>
          <button type="button" className="btn btn-info btn-block my-4" onClick={() => openPatientManagement()}>
            Gestionar Citas
          </button>
          <button type="button" className="btn btn-info btn-block my-4" onClick={() => logOutFetch()}>
            Cerrar Sesion
          </button>
        </div>
        <div className="col-9 border ">
          <HomeBoard />
        </div>
      </div>
    </div>
  );
};

export default Home;
