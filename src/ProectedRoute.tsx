// src/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from "./utils/cookieUtil";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const jwtToken = getCookie("jwt");
  console.log("jwt tOKEN::", jwtToken);

  if (!jwtToken) {
    // If JWT token is not found, redirect to the signup page
    return <Navigate to="/signup" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
