import React, { useEffect, useState } from "react";
import { logOut } from "../../actions/loginActions";
import { useUserState } from "../../store/userProvider";
import Calendar from "../calendar/calendar";
import PatientProfile from "../patientProfile/patientProfile";
import "../../styles/home.css";

const Home = () => {
  const { user } = useUserState();
  const [userName, setUserName] = useState("USER NAME");

  useEffect(() => {
    if (user) {
      setUserName(user.userName);
    }
  }, []);
  const logOutFetch = () => {
    logOut();
  };

  return (
    <div className="wrapper App">
      <div className="row w-100 principal-Container">
        <div className="border col-3" id="childenConteiner">
          <h4 id="usercolor">{userName}</h4>
          <img
            className="logo"
            src={`${process.env.PUBLIC_URL}/tata.jpg`}
            alt="FISIOAPP"
          />
          <div className="border w-100">{/* here must go the calendar */}</div>
          <button
            type="button"
            className="btn btn-info btn-block my-4"
            onClick={() => logOutFetch()}
          >
            Gestionar Cita
          </button>
          <button
            type="button"
            className="btn btn-info btn-block my-4"
            onClick={() => logOutFetch()}
          >
            Gestionar Paciente
          </button>
          <button
            type="button"
            className="btn btn-info btn-block my-4"
            onClick={() => logOutFetch()}
          >
            Cerrar Sesion
          </button>
        </div>
        <div
          id="childenConteiner2"
          className="border col-9 principal-Container"
        >
          <Calendar />
          {/*<PatientProfile />*/}
        </div>
      </div>
    </div>
  );
};

export default Home;
