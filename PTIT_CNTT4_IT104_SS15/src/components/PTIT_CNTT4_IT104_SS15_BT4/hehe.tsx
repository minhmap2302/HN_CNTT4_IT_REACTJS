import React, { Component } from "react";
import type { ChangeEvent, FormEvent } from "react";

type ProgressFormState = {
  progress: number;
  submittedProgress: number | null;
};

class ProgressForm extends Component<{}, ProgressFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      progress: 0,
      submittedProgress: null,
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ progress: parseInt(event.target.value) });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.setState({ submittedProgress: this.state.progress });
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h2>
          Tiến độ hoàn thành:{" "}
          {this.state.submittedProgress !== null
            ? `${this.state.submittedProgress} %`
            : "%"}
        </h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.progress}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ProgressForm;
