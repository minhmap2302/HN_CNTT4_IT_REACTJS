import React, { useState } from "react";

type State = {
  name: string;
  email: string;
};

export default function UserProfile() {
  const [user, setUser] = useState<State>({ name: "", email: "" });
  const [visible, setVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVisible(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Nhập thông tin</h2>
        <input
          type="text"
          value={user.name}
          name="name"
          placeholder="Nhập tên"
          onChange={handleChange}
        />
        <input
          type="text"
          value={user.email}
          name="email"
          placeholder="Nhập email"
          onChange={handleChange}        />
        <button type="submit">Gửi</button>
      </form>
      {visible && (
        <div>
          <div><strong>Tên:</strong> {user.name}</div>
          <div><strong>Email:</strong> {user.email}</div>
        </div>
      )}
    </div>
  );
}
