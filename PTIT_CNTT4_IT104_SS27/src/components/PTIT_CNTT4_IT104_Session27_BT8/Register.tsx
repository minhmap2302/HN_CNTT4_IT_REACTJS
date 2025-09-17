import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password || !form.confirmPassword) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Mật khẩu nhập lại không khớp.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((u) => u.email === form.email)) {
      setError("Email đã tồn tại.");
      return;
    }

    users.push({ email: form.email, password: form.password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công! Hãy đăng nhập.");
    navigate("/login");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Đăng ký</h2>
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
        <div>
          <label>Nhập lại mật khẩu</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "10px" }}
          />
        </div>
        <button type="submit">Đăng ký</button>
      </form>
      <p>
        Đã có tài khoản? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}
