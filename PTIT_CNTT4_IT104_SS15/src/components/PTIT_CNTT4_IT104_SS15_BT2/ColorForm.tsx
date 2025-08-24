import React, { Component } from "react";
import type { ChangeEvent, FormEvent } from "react";

type ColorFormState = {
  color: string;
  submittedColor: string | null;
};

class ColorForm extends Component<{}, ColorFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      color: "#000000", // màu mặc định
      submittedColor: null,
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ color: event.target.value });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.setState({ submittedColor: this.state.color });
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h2>
          Color:{" "}
          {this.state.submittedColor
            ? this.state.submittedColor
            : ""}
        </h2>

        <form onSubmit={this.handleSubmit}>
          <label>
            Màu sắc{" "}
            <input
              type="color"
              value={this.state.color}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ColorForm;
