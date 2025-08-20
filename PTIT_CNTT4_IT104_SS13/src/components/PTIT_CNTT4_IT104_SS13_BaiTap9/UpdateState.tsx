import React, { Component } from "react";

type StateType = {
  company: string;
};

export default class UpdateState extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      company: "Rikkei Academy",
    };
  }

  handleChange = () => {
    this.setState({
      company: "Rikkei Soft",
    });
  };

  render() {
    return (
      <div>
        <h2>Tên công ty: {this.state.company}</h2>
        <button onClick={this.handleChange}>Change</button>
      </div>
    );
  }
}
