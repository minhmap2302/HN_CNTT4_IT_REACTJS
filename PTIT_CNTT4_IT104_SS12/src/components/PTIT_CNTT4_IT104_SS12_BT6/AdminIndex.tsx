import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";

export default function AdminIndex() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "rgb(233,236,239)" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Menu />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
