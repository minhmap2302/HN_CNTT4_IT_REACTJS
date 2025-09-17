// import React from 'react'

import { Link } from "react-router-dom";

export default function Home7() {
  return (
    <div>
      <h1>Trang chủ</h1>
      <p>đây là trang chủ</p>
      <Link to={"/about"}>About</Link>
    </div>
  );
}
