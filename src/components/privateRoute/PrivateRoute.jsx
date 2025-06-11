import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../layout/Layout";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <Layout />;
};

export default PrivateRoute;
