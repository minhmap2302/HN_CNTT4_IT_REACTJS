import { Outlet, Link } from "react-router-dom";

export default function Teams() {
  return (
    <div>
      <h1> Trang Teams</h1>
      <ul>
        <li>
          <Link to="team-a">Team A</Link>
        </li>
        <li>
          <Link to="team-b">Team B</Link>
        </li>
        <li>
          <Link to="team-c">Team C</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
