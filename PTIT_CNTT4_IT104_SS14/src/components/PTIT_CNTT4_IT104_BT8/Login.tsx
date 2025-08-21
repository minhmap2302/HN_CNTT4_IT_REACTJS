import React, { Component } from "react";

type User = {
  email: string;
  password: string;
};

type State = {
  user: User;
  message: string;
};

export default class Login extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
      },
      message: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = this.state.user;

    if (!email || !password) {
      this.setState({ message: "Email và mật khẩu không được để trống" });
      return;
    }

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser: User = JSON.parse(storedUser);

      if (parsedUser.email === email && parsedUser.password === password) {
        this.setState({ message: "Đăng nhập thành công" });
      } else {
        this.setState({ message: "Đăng nhập thất bại" });
      }
    } else {
      this.setState({ message: "Khon co" });
    }
  };

  render() {
    return (
      <div>
        <h2>Đăng nhập tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={this.state.user.email}
            onChange={this.handleChange}
          />
          <br />

          <label>Mật khẩu</label>
          <input
            type="password"
            name="password"
            value={this.state.user.password}
            onChange={this.handleChange}
          />
          <br />

          <button type="submit">Login</button>
        </form>

        {/* Hiển thị thông báo */}
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    );
  }
}
