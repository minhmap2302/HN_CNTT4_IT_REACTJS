import React, { Component } from "react";

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  private intervalId?: ReturnType<typeof setInterval>;

  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        count: (prevState.count + 1) % 11,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
      </div>
    );
  }
}

export default Counter;
