import React, { Component } from "react";

interface ClockState {
  time: Date;
}

class Clock extends Component<{}, ClockState> {
  private timerID?: ReturnType<typeof setInterval>;

  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  private formatTime(num: number): string {
    return String(num).padStart(2, "0");
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h2>
          Thời gian hiện tại:{" "}
          {this.formatTime(time.getHours())} :
          {this.formatTime(time.getMinutes())} :
          {this.formatTime(time.getSeconds())}
        </h2>
      </div>
    );
  }
}

export default Clock;
