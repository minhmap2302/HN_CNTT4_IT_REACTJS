// import React from 'react'

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isAuth", "true");
    navigate("/account");
  };

  return (
    <div>
      <form action="">
        <input type="text" placeholder="Nhập tài khoản" />
        <br />
        <input type="text" placeholder="Nhập mật khẩu" />
        <br />
        <button onClick={handleLogin}>Submit</button>
      </form>
    </div>
  );
}
