import React, { useState, useCallback } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("");
  const handleChangeColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    },
    []
  );

  return (
    <div style={{ margin: "20px" }}>
      <h2>Color Picker</h2>
      <div style={{ marginBottom: "10px" }}>
        <label>Màu người dùng chọn: </label>
        <input type="color" value={color} onChange={handleChangeColor} />
      </div>

      <div style={{ marginTop: "10px" }}>
        <p>Màu hiển thị:</p>
        <div
          style={{
            width: "100px",
            height: "50px",
            border: "1px solid #000",
            backgroundColor: color || "#fff",
          }}
        ></div>
      </div>
    </div>
  );
}
