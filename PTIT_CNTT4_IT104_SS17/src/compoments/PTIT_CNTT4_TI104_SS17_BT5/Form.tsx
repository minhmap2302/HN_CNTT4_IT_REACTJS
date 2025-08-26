import { useState } from "react";

export default function Form() {
  const [text, setText] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Form nhập tiêu đề</h1>
      <input
        type="text"
        placeholder="Nhập nội dung"
        value={text}
        onChange={handleChange}
      />
      <p>{text}</p>
    </div>
  );
}
