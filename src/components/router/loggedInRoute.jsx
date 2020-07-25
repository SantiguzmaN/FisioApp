import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const LoggedInRoute = ({ component: Component }) => {
  if (!localStorage.token) {
    return <Redirect to="/login" />;
  }
  return (
    <Route render={(otherProps) => <Component {...otherProps} />} />
  );
};
export default LoggedInRoute;
