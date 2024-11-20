import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // Verifica si el usuario está autenticado (ejemplo básico)
  const isAuthenticated = !!localStorage.getItem("token"); // Cambia esto según tu lógica de autenticación

  if (!isAuthenticated) {
    // Si no está autenticado, redirige al login
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, renderiza el contenido protegido
  return <>{children}</>;
};

export default ProtectedRoute;
