import React from 'react';
import { logOut } from '../../actions/loginActions';

const Home = () => {
  const logOutFetch = () => {
    logOut();
  }
  return (
    <div className="container">
      <div className="row home-container">
        <h1> HOME </h1>
        <button onClick={() => logOutFetch()}>
          Cerrar Sesion
        </button>
      </div>
    </div>
  );
};

export default Home;
