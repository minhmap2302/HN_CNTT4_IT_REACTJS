// import React from 'react'

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", pass: "", role: "" });
  const [state, setState] = useState({
    email: "quyen@gmail.com",
    pass: "1",
    role: "admin",
  });
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      state.email !== input.email ||
      state.pass !== input.pass ||
      state.role !== input.role
    ) {
      alert("Thông tin không chính xác");
      return;
    }
    localStorage.setItem("isAuth", "true");
    navigate("/account");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);

    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);

    setInput({
      ...input,
      ["role"]: e.target.value,
    });
  };
  return (
    <div>
      <form action="">
        <input
          type="email"
          name="email"
          placeholder="Nhập tài khoản"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="pass"
          placeholder="Nhập mật khẩu"
          onChange={handleChange}
        />
        <br />
        <select onChange={handleSelect} name="role">
          <option value="none">Chọn quyền</option>
          <option value="admin">admin</option>
          <option value="user">User</option>
        </select>
        <button onClick={handleLogin}>Submit</button>
      </form>
    </div>
  );
}
