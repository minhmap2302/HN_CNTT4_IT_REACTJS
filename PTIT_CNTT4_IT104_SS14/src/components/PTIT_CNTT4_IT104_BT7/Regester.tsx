import React, { Component, createRef } from "react";

type User = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

type State = {
  user: User;
  message: string;
};

export default class RegisterForm extends Component<{}, State> {
  nameInputRef = createRef<HTMLInputElement>();

  constructor(props: {}) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
        phone: "",
      },
      message: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      user: {
        ...prev.user,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, phone } = this.state.user;

    // Validate
    if (!name || !email || !password) {
      this.setState({ message: "Tên, Email và Mật khẩu không được để trống" });
      return;
    }

    // Lấy dữ liệu cũ từ localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Kiểm tra email trùng
    const isEmailExist = users.some((u: User) => u.email === email);
    if (isEmailExist) {
      this.setState({ message: "Email đã tồn tại, vui lòng nhập email khác" });
      return;
    }

    // Lưu vào localStorage
    users.push({ name, email, password, phone });
    localStorage.setItem("users", JSON.stringify(users));

    // Reset form
    this.setState({
      user: { name: "", email: "", password: "", phone: "" },
      message: "Đăng ký tài khoản thành công",
    });

    // Focus lại ô tên
    this.nameInputRef.current?.focus();
  };

  render() {
    const { name, email, password, phone } = this.state.user;
    return (
      <div style={{ maxWidth: "300px", margin: "auto" }}>
        <h3>Đăng ký tài khoản</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Tên sinh viên</label>
          <input
            ref={this.nameInputRef}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <br />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />

          <label>Mật khẩu</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <br />

          <label>Số điện thoại</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          />
          <br />

          <button type="submit">Đăng ký</button>
        </form>

        {this.state.message && <p>{this.state.message}</p>}
        <p style={{ fontStyle: "italic" }}>Form đăng ký tài khoản</p>
      </div>
    );
  }
}
