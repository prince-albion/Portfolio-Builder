import React, { Component } from 'react';
import './App.css';

class Slider6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 50
    }
    this.ab = 0
    {/*Fixed UK and Developed (exc. UK) values*/}
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

    {/*Computing values for UK and Developed (exc. UK) tilts*/}
    let uk = this.uk/2
    let devxuk = this.devxuk/2

    let uk_m = uk*this.ab
    let devxuk_m = devxuk*this.ab
    let uk_v = number*this.uk
    let devxuk_v = number*devxuk

    return (
      <div>
        <p>uk market: {uk_m.toFixed(2)}</p>
        <p>uk value: {uk_v.toFixed(2)}</p>

        <p>dev(exc. uk) market: {devxuk_m.toFixed(2)}</p>
        <p>dev(exc. uk) value: {devxuk_v.toFixed(2)}</p>


        <p>number2: {number}</p>
        <input onInput={this.handleOnInput} type="range" step="1" min="0"
          max="100" value={number} className="slider22">
        </input>
        <p>number1: {this.ab}</p>

      </div>
    )
  }
}
export default Slider6
