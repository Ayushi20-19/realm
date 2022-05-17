import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export function PrivateRoute({ children }) {
  const { token } = useSelector((store) => store.auth);
  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to='/auth' state={{ from: location?.pathname }} replace />
  );
}
