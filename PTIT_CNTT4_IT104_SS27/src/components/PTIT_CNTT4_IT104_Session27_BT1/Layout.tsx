// import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          backgroundColor: "blue",
          padding: "20px",
        }}
      >
        <NavLink style={{ color: "white", textDecoration: "none" }} to="/">
          Home
        </NavLink>
        <NavLink style={{ color: "white", textDecoration: "none" }} to="/about">
          About
        </NavLink>
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
