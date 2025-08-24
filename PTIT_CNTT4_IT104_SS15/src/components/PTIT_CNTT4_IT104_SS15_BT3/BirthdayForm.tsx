import React, { Component } from "react";
import type { ChangeEvent, FormEvent } from "react";

type BirthdayFormState = {
  birthday: string;
  submittedBirthday: string | null;
};

class BirthdayForm extends Component<{}, BirthdayFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      birthday: "",
      submittedBirthday: null,
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ birthday: event.target.value });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.setState({ submittedBirthday: this.state.birthday });
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h2>
          Ngày sinh:{" "}
          {this.state.submittedBirthday ? this.state.submittedBirthday : ""}
        </h2>

        <form onSubmit={this.handleSubmit}>
          <label>
            Ngày sinh:{" "}
            <input
              type="date"
              value={this.state.birthday}
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BirthdayForm;
