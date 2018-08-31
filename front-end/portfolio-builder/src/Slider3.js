import React, { Component } from 'react';
import './App.css';

class Slider3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 50
    }
    this.ab = this.props.eq
  }

  handleOnInput = (event) => {
      this.setState({
        number: event.target.value
      })
      this.props.onValueChange(event.target.value)
    }

  render() {
    let { number } = this.state
    this.ab = 100-number

    return (
      <div>
        <p>number2: {number}</p>
        <input onInput={this.handleOnInput} type="range" step="1" min="0"
          max="100" value={number} className="slider22">
        </input>
        <p>number1: {this.ab}</p>

      </div>
    )
  }
}
export default Slider3
