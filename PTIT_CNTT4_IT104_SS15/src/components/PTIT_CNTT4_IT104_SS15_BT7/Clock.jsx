import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h2>
          Thời gian hiện tại:{" "}
          {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}
        </h2>
      </div>
    );
  }
}

export default Clock;
