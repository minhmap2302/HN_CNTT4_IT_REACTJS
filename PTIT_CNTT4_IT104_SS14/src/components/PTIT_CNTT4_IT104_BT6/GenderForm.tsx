import React, { Component } from "react";

type State = {
  gender: string;
  selectedGender: string;
};

export default class GenderForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      gender: "",
      selectedGender: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ selectedGender: this.state.gender });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Giới tính:</p>
          <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={this.state.gender === "Nam"}
              onChange={this.handleChange}
            />
            Nam
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={this.state.gender === "Nữ"}
              onChange={this.handleChange}
            />
            Nữ
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={this.state.gender === "Khác"}
              onChange={this.handleChange}
            />
            Khác
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>

        {this.state.selectedGender && (
          <p>Giới tính đã chọn: {this.state.selectedGender}</p>
        )}
      </div>
    );
  }
}
