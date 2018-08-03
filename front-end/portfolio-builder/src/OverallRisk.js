import React, { Component } from 'react'
import './App.css'

class OverallRisk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 50
    }
  }

  handleOnInput = (event) => {
      this.setState({
        number: event.target.value
      })
    }

  render() {
    let { number } = this.state
      return (
        <div className="sliderSection1">
          <h2 className="section1Title">Overall Risk</h2>
          <input onInput={this.handleOnInput} type="range" step="1" min="0"
            max="100" value={number} className="slider">
          </input>
          <p>Number: {this.state.number}</p>
        </div>
      )
    }
}

export default OverallRisk
