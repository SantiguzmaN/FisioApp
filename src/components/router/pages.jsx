import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../login/login';
import Home from '../home/homeContainer';
import Signup from '../signup/signup';
import LoggedInRoute from './loggedInRoute';
import LoggedOutRoute from './loggedOutRoute';

const Pages = () => {
  return (
    <Switch>
      <LoggedInRoute path="/" exact={true} component={Home} />
      <LoggedOutRoute path="/login" exact={true} component={Login} />
      <LoggedOutRoute path="/signup" exact={true} component={Signup} />
    </Switch>
  );
};

export default Pages;
