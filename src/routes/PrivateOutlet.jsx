import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

const PrivateOutlet = () => {
  const { signed } = useContext(AuthContext)

  return signed ? <Outlet /> : <Navigate to="/" />
} 

export default PrivateOutlet