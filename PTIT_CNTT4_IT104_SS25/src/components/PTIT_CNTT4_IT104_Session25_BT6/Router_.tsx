import { NavLink } from "react-router-dom";

export default function Router() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/detail">Detail</NavLink>
    </div>
  );
}
