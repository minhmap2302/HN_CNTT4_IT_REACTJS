import React, { Component } from "react";
import type { ChangeEvent } from "react";

interface State {
  text: string;
}

class Input extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div>
        <h3>Dữ liệu: {this.state.text}</h3>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Input;
