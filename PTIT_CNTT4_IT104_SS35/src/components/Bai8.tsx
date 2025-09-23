import { useState } from "react";
import { useAppDispatch} from "../hooks/hook";
import { Login } from "../Redux/Login";
import { useNavigate } from "react-router-dom";

export default function Bai8() {
    const na=useNavigate();
  const dispatch = useAppDispatch();
  const person = [
    { id: 1, name: "nguyen van a", email: "nguyenvana@gmail.com", password: "a12345678" },
  ];

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const user = person.find(
      (p) => p.email === form.email && p.password === form.password
    );

    if (user) {
      dispatch(Login(user));
      alert("Đăng nhập thành công!");
      na("/")
    } else {
      alert("Email hoặc mật khẩu không chính xác!");
    }

    setForm({ email: "", password: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-col">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6">LOGIN FORM</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
