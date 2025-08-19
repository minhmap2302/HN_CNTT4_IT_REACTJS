import React from "react";
import Cart from "./Cart";

export default function Main() {
  return (
    <main style={{ flex: 1, padding: "20px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "15px" }}>
      {Array.from({ length: 12 }).map((_, i) => (
        <Cart key={i} />
      ))}
    </main>
  );
}
