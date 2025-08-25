import { Component } from 'react'
type State = {
    counter: number;
}
export default class ClickCounter extends Component<{},State> {
    constructor(props:{}){
        super(props)
        this.state = {
            counter: 0,
        };
    }
    increment = () =>{
        this.setState((prevState) => ({
            counter: prevState.counter + 1 
        }))
    }
  render() {
    return (
      <div>
        <h2>Click Counter</h2>
        <p>Số lần click: {this.state.counter}</p>
        <button onClick={this.increment}>Click me</button>
      </div>
    )
  }
}
