/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const LoggedOutRoute = ({ component: Component }) => {
  if (localStorage.token) {
    return <Redirect to="/" />;
  }

  return <Route render={(otherProps) => <Component {...otherProps} />} />;
};

export default LoggedOutRoute;
