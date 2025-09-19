import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function Login() {
  const registered = useSelector((state: RootState) => state.account);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (registered) {
      setEmail(registered.email);
      setPassword(registered.password);
    }
  }, [registered]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Đăng nhập với: ${email} - ${password}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-80 p-6 bg-white shadow rounded-lg">
        <h2 className="text-center text-xl font-semibold mb-5">Đăng nhập</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="Nhập email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Nhập mật khẩu..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}