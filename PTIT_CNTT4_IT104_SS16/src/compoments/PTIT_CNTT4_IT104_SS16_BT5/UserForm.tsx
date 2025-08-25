import { Component } from "react";
import type { ChangeEvent } from "react";

type State = {
  name: string;
  email: string;
  age: number | "";
  error: string;
  submitted: boolean;
};

export default class UserForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      error: "",
      submitted: false,
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      [name]: name === "age" ? Number(value) || "" : value,
      error: "",
      submitted: false,
    } as unknown as Pick<State, keyof State>);
  };

  handleSubmit = () => {
    const { email, age } = this.state;

    if (!email.includes("@")) {
      this.setState({ error: "Email không hợp lệ!", submitted: false });
      return;
    }
    if (age === "" || age <= 0) {
      this.setState({ error: "Tuổi không được âm!", submitted: false });
      return;
    }

    this.setState({ error: "", submitted: true });
  };

  handleReset = () => {
    this.setState({
      name: "",
      email: "",
      age: "",
      error: "",
      submitted: false,
    });
  };

  render() {
    const { name, email, age, error, submitted } = this.state;

    return (
      <div >
        <h2>Nhập thông tin người dùng</h2>

        <input
          type="text"
          name="name"
          placeholder="Họ tên"
          value={name}
          onChange={this.handleChange}
          style={{ width: "100%", margin: "6px 0", padding: "8px" }}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
          style={{ width: "100%", margin: "6px 0", padding: "8px" }}
        />

        <input
          type="number"
          name="age"
          placeholder="Tuổi"
          value={age}
          onChange={this.handleChange}
          style={{ width: "100%", margin: "6px 0", padding: "8px" }}
        />

        <div style={{ marginTop: "10px" }}>
          <button onClick={this.handleSubmit} style={{ marginRight: "10px" }}>
            Gửi
          </button>
          <button onClick={this.handleReset}>Xóa tất cả</button>
        </div>

        {error && <p style={{ color: "red", marginTop: "10px" }}>⚠️ {error}</p>}

        {submitted && (
          <div style={{ marginTop: "15px", padding: "10px", border: "1px solid #0d6efd", borderRadius: "6px", background: "#eaf4ff" }}>
            <h4>📋 Thông tin đã nhập:</h4>
            <p>Họ tên: {name}</p>
            <p>Email: {email}</p>
            <p>Tuổi: {age}</p>
          </div>
        )}
      </div>
    );
  }
}
