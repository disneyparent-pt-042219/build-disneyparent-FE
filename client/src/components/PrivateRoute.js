import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() => {
      if (localStorage.getItem('token')) {
        return <Component />;
      }
      console.log('redirecting!!!!');
      return <Redirect to="/login" />;
    }}
  />
);

export default withRouter(PrivateRoute);
