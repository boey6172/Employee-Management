import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAuthentication from "src/hooks/useAuthentication";

export default ({ component: Component, ...rest }) => {
  const { getUser } = useAuthentication();
  const user = getUser();

  const isAuthenticated = () => {
    if (user.authenticated) {
      if (user.credential.roles.includes("passenger")) {
        return <Navigate to="/admin" />;
      } else {
        return <Navigate to="/" />;
      }
    } else {
      return <Component/>;
    }
  };

  return isAuthenticated();
};
