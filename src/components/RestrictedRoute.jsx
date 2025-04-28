import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children, destination = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) return <Navigate to={destination} />;

  return children;
};

export default RestrictedRoute;
