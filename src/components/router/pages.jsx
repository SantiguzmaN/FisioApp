import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../login/login';
import LoggedInRoute from './loggedInRoute';
import LoggedOutRoute from './loggedOutRoute';


const Pages = () => {
  return (
    <Switch>
      <LoggedOutRoute path="/login" exact={true} component={Login} />
    </Switch>
  );
};

export default Pages;
