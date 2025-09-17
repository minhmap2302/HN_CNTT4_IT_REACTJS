import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Input, Button } from "antd";

export default function Student3() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [studentName, setStudentName] = useState(
    searchParams.get("studentName") || ""
  );

  const handleSearch = () => {
    if (studentName.trim()) {
      navigate(
        `/student3?studentName=${encodeURIComponent(studentName.trim())}`
      );
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Student Search</h1>
      <Input
        placeholder="Nhập tên sinh viên"
        value={studentName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setStudentName(e.target.value)
        }
        style={{ width: 300, marginRight: 10 }}
      />
      <Button type="primary" onClick={handleSearch}>
        Tìm kiếm
      </Button>

      {searchParams.get("studentName") && (
        <div style={{ marginTop: "20px" }}>
          Kết quả tìm kiếm: <strong>{searchParams.get("studentName")}</strong>
        </div>
      )}
    </div>
  );
}
