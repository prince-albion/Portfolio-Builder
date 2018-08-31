import React, { Component } from 'react';
import './App.css';

{/*Defensive Sliders*/}
class Defensive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 50
    }
    this.state = {
      number2: 50
    }
  }

  handleOnInput = (event) => {
      this.setState({
        number: event.target.value
      })
    }

  handleOnInput2 = (event) => {
      this.setState({
        number2: event.target.value
      })
    }


  render() {
    let { number } = this.state
    let { number2 } = this.state

    return (
      <div className="sliderSection3">
        <h2 className="section3Title">Defensive</h2>
        <input onInput={this.handleOnInput} type="range" step="1" min="0"
          max="100" value={number} className="slider">
        </input>
        <p>Number: {this.state.number}</p>

        <input onInput={this.handleOnInput2} type="range" step="1" min="0"
          max="100" value={number2} className="slider">
        </input>
        <p>Number: {this.state.number2}</p>
      </div>
    )
  }
}

export default Defensive
