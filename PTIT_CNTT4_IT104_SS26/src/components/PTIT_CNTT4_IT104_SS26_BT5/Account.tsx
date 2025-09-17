// import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
export default function Account() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Trang Tài Khoản</h1>
      <p>Chào mừng bạn đã đăng nhập thành công!</p>
      <Button danger onClick={handleLogout}>
        Đăng xuất
      </Button>
    </div>
  );
}
