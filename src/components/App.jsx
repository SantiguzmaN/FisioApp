import React from 'react';
import { Route, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Pages from './router/pages';
import history from '../history';
import UserProvider from '../store/userProvider';
import FormProvider from '../store/formProvider';
import CalendarProvider from '../store/calendarProvider';
import HomeBoardProvider from '../store/homeBoardProvider';
import SearchProvider from '../store/searchProvider';


import '../App.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <FormProvider>
      <HomeBoardProvider>
        <CalendarProvider>
          <SearchProvider>
            <UserProvider>
              <Router history={history}>
                <Route component={Pages} />
              </Router>
              <ToastContainer />
            </UserProvider>
          </SearchProvider>
        </CalendarProvider>
      </HomeBoardProvider>
    </FormProvider>
  );
};

export default App;
