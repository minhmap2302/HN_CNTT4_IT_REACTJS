import React, { Component } from "react";
import type { ChangeEvent, FormEvent } from "react";

type EmailFormState = {
  email: string;
  submittedData: { email: string } | null;
};

class EmailForm extends Component<{}, EmailFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      submittedData: null,
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.setState({ submittedData: { email: this.state.email } });
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email{" "}
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>

        {this.state.submittedData && (
          <div style={{ marginTop: "20px" }}>
            <pre>{JSON.stringify(this.state.submittedData, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  }
}

export default EmailForm;
