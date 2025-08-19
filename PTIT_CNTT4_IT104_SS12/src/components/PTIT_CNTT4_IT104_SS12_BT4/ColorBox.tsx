import React from "react";

type ColorBoxProps = {
  color: string;
};

export default function ColorBox({ color }: ColorBoxProps) {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontWeight: "bold",
          margin: "0 auto",
        }}
      >
        Box
      </div>
      <div
        style={{
          marginTop: "10px",
          padding: "5px 10px",
          border: "1px solid gray",
          display: "inline-block",
          borderRadius: "4px",
          backgroundColor: "#f8f8f8",
        }}
      >
        {color}
      </div>
    </div>
  );
}
