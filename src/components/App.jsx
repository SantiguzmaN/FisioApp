import React from 'react';
import { Route, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Pages from './router/pages';
import history from '../history';
import UserProvider from '../store/userProvider';
import HomeBoardProvider from '../store/homeBoardProvider';

import '../App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <HomeBoardProvider>
      <UserProvider>
        <Router history={history}>
          <Route component={Pages} />
        </Router>
        <ToastContainer />
      </UserProvider>
    </HomeBoardProvider>
  );
};

export default App;
