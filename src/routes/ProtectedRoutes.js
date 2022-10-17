import React from "react";
import { Navigate, redirect } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("This ", isAuthenticated);
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
