import React, { Component } from "react";

type State = {
  isDarkMode: boolean;
};

export default class ThemeSwitcher extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { isDarkMode } = this.state;

    const themeStyle: React.CSSProperties = {
      backgroundColor: isDarkMode ? "#222" : "#fff",
      color: isDarkMode ? "#fff" : "#000",
      minHeight: "200px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "8px",
      padding: "20px",
      transition: "all 0.3s ease",
    };

    return (
      <div style={themeStyle}>
        <h2>
          {isDarkMode ? "Chế độ Tối đang bật" : "Chế độ Sáng đang bật"}
        </h2>
        <button
          onClick={this.toggleTheme}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Chuyển theme
        </button>
      </div>
    );
  }
}
