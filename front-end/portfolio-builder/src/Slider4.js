import React, { Component } from 'react';
import './App.css';

class Slider4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 50
    }
    this.ab = 0
    {/*Fixed emerging markets value*/}
    this.em = .29
  }

  handleOnInput = (event) => {
      this.setState({
        number: event.target.value
      })

    }

  render() {
    let { number } = this.state
    this.ab = 100-number

    let em = this.em/2
    let em_m = this.ab*em
    let em_s = number*em

    return (
      <div>
        <p>em market: {em_m.toFixed(2)}</p>
        <p>em small: {em_s.toFixed(2)}</p>

        <p>number2: {number}</p>
        <input onInput={this.handleOnInput} type="range" step="1" min="0"
          max="100" value={number} className="slider22">
        </input>
        <p>number1: {this.ab}</p>

      </div>
    )
  }
}
export default Slider4
