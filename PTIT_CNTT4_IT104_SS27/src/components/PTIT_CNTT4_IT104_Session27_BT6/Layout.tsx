// import React from 'react'

import { NavLink, Outlet } from "react-router-dom";
import "../../App.css";
export default function Layout() {
  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/product"}>Product</NavLink>
        <NavLink to={"/detail"}>Detail</NavLink>
      </div>
      <Outlet />
    </>
  );
}
