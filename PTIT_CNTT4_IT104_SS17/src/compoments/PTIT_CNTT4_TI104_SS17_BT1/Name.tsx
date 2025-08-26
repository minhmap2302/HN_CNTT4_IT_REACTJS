import { useState } from "react";

export default function Name() {
  const [name] = useState("Nguyen Tien Minh");

  return (
    <div>
      <h1>Ho va ten: {name}</h1>
    </div>
  );
}
