import { Component } from 'react'
import "./button.css"

export default class Colorback extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary">Primary</button>      
        <button className="btn btn-secondary">Secondary</button>  
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warming</button>
        <button className="btn btn-danger">Dangger</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-light">Light</button>
        <button className="btn btn-dark">Dark</button>
        <a href="">link</a>
      </div>
    )
  }
}
