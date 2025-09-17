// src/pages/Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Vui lòng nhập đầy đủ email và mật khẩu.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (!user) {
      setError("Sai email hoặc mật khẩu.");
      return;
    }

    alert("Đăng nhập thành công!");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Đăng nhập</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </div>
        <div>
          <label>Mật khẩu</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
      <p>
        Chưa có tài khoản? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}
