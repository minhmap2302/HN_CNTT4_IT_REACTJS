import { useState} from "react";

export default function CounText() {
  const [text, setText] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const charCount = text.length;
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Đếm từ và ký tự</h2>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Nhập văn bản..."
        rows={5}
        cols={40}
      />

      {text.trim() === "" ? (
        <p style={{ color: "gray" }}>Chưa có dữ liệu</p>
      ) : (
        <div>
          <p>Số ký tự (tính cả khoảng trắng): {charCount}</p>
          <p>Số từ: {wordCount}</p>
        </div>
      )}
    </div>
  );
}
