// import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import "../../App.css";
export default function BlogLayout() {
  const linkStyle = ({ isActive }) => ({
    display: "block",
    marginBottom: "0.5rem",
    color: isActive ? "white" : "blue",
    textDecoration: "none",
    backgroundColor: "red",
    padding: "20px",
    borderRadius: "5px",
  });
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{ width: "200px", background: "#4969deff", padding: "1rem" }}
      >
        <h2 style={{ color: "white" }}>My Blog</h2>
        <nav>
          <NavLink to="/blog/posts" style={linkStyle}>
            Posts
          </NavLink>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
