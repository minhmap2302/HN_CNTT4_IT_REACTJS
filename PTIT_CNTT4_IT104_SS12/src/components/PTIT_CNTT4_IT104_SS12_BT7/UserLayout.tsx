import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Main from "./Main";
import Article from "./Article";

export default function UserLayout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Navbar />
      <div style={{ display: "flex", flex: 1 }}>
        <Menu />
        <Main />
        <Article />
      </div>
    </div>
  );
}
