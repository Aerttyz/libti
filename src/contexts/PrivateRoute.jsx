import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  if (!isAuthenticated) {
    if (!toast.isActive("auth-toast")) {
      toast.error("Você não tem permissão para acessar essa página", {
        toastId: "auth-toast",
      });
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return element;
};

export default PrivateRoute;
