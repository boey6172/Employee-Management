import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";

export default ({ component: Component, ...rest }) => {
  const { getUser } = useAuthentication();
  const user = getUser();

  const isAuthenticated = () => {
    if (user.authenticated) {
      if (user.credential.roles.includes("passenger")) {
        return <Component />;
      } else {
        return <Navigate to="dashboard" />;
      }
    } else {
      //TODO change to "/admin/login"
      return <Navigate to="/login" />;
    }
  };

  return isAuthenticated();
};
