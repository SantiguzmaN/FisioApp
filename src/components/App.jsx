import React from 'react';
import { Route, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Pages from './router/pages';
import history from '../history';
import UserProvider from '../store/userProvider';
import CalendarProvider from '../store/calendarProvider';
import HomeBoardProvider from '../store/homeBoardProvider';


import '../App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <HomeBoardProvider>
      <CalendarProvider>
        <UserProvider>
          <Router history={history}>
            <Route component={Pages} />
          </Router>
          <ToastContainer />
        </UserProvider>
      </CalendarProvider>
    </HomeBoardProvider>
  );
};

export default App;
