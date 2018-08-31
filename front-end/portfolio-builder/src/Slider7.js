import React, { Component } from 'react';
import './App.css';

class Slider7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 50
    }
    this.ab = 0
    this.value2 = this.state
    this.value3 = this.state

    this.uk = .1988
    this.devxuk = .511
  }

  handleOnInput = (event) => {
      this.setState({
        number: event.target.value
      })

    }

  render() {
    let { number } = this.state
    this.ab = 100-number

    let uk = this.uk/2
    let devxuk = this.devxuk/2

    let uk_m = uk*this.ab
    let devxuk_m = devxuk*this.ab
    let uk_s = number*this.uk
    let devxuk_s = number*devxuk

    return (
      <div>
        <p>uk market: {uk_m.toFixed(2)}</p>
        <p>uk small: {uk_s.toFixed(2)}</p>

        <p>dev(exc. uk) market: {devxuk_m.toFixed(2)}</p>
        <p>dev(exc. uk) small: {devxuk_s.toFixed(2)}</p>

        <p>number2: {number}</p>
        <input onInput={this.handleOnInput} type="range" step="1" min="0"
          max="100" value={number} className="slider22">
        </input>
        <p>number1: {this.ab}</p>

      </div>
    )
  }
}
export default Slider7
