import React from 'react';
import { Route, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Pages from './router/pages';
import history from '../history';
import '../App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <React.Fragment>
      <Router history={history}>
        <Route component={Pages} />
      </Router>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
