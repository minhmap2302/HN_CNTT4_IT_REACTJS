// import React from 'react'

import { Navigate } from "react-router-dom";
// import Account from "./Account";
interface Props {
  children: React.JSX.Element;
}
export default function PrivateRouter({ children }: Props) {
  const isAuth = localStorage.getItem("isAuth") === "true";

  return isAuth ? children : <Navigate to="/login" replace />;
}
