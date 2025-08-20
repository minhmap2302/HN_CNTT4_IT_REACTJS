import React, { Component } from "react";

type StateType = {
  theme: "light" | "dark";
  language: "english" | "vietnamese";
};

export default class Applemeomeo extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      theme: "light",   
      language: "english",
    };
  }
  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "light" ? "dark" : "light",
    }));
  };

  toggleLanguage = () => {
    this.setState((prevState) => ({
      language: prevState.language === "english" ? "vietnamese" : "english",
    }));
  };

  render() {
    const { theme, language } = this.state;
    const appStyle = {
      backgroundColor: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#000" : "#fff",
      minHeight: "100vh",
      padding: "20px",
    };

    return (
      <div style={appStyle}>
        <h1>Ứng dụng React</h1>
        <p>
          Theme hiện tại: <strong>{theme}</strong>
        </p>
        <p>
          Ngôn ngữ hiện tại:{" "}
          <strong>{language === "english" ? "English" : "Tiếng Việt"}</strong>
        </p>
        {theme === "light" && language === "english" && (
          <p>Hello, welcome to the light theme app!</p>
        )}

        {theme === "dark" && language === "vietnamese" && (
          <p>Xin chào, đây là ứng dụng với giao diện tối!</p>
        )}

        <hr />
        <button onClick={this.toggleTheme}>Đổi theme</button>
        <button onClick={this.toggleLanguage} style={{ marginLeft: "10px" }}>
          Đổi ngôn ngữ
        </button>
      </div>
    );
  }
}
