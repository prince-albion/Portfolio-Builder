import React, { Component } from 'react'
import './App.css'

class Growth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 50
    }
    this.state = {
      number2: 50
    }
    this.state = {
      number3: 50
    }
    this.state = {
      number4: 50
    }
    this.state = {
      number5: 50
    }
    this.state = {
      number6: 50
    }
    this.state = {
      number7: 50
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
  handleOnInput3 = (event) => {
      this.setState({
        number3: event.target.value
      })
    }
  handleOnInput4 = (event) => {
      this.setState({
        number4: event.target.value
      })
    }
  handleOnInput5 = (event) => {
      this.setState({
        number5: event.target.value
      })
    }
  handleOnInput6 = (event) => {
      this.setState({
        number6: event.target.value
      })
    }
  handleOnInput7 = (event) => {
      this.setState({
        number7: event.target.value
      })
    }

  render() {
    let { number } = this.state
    let { number2 } = this.state
    let { number3 } = this.state
    let { number4 } = this.state
    let { number5 } = this.state
    let { number6 } = this.state
    let { number7 } = this.state

    return (
      <div className="sliderSection2">
        <h2 className="section2Title">Growth</h2>
        <input onInput={this.handleOnInput} type="range" step="1" min="0"
          max="100" value={number} className="slider21">
        </input>
        <p>Number: {this.state.number}</p>
        <input onInput={this.handleOnInput2} type="range" step="1" min="0"
          max="100" value={number2} className="slider21">
        </input>
        <p>Number: {this.state.number2}</p>
        <input onInput={this.handleOnInput3} type="range" step="1" min="0"
          max="100" value={number3} className="slider21">
        </input>
        <p>Number: {this.state.number3}</p>
        <input onInput={this.handleOnInput4} type="range" step="1" min="0"
          max="100" value={number4} className="slider22">
        </input>
        <p>Number: {this.state.number4}</p>
        <input onInput={this.handleOnInput5} type="range" step="1" min="0"
          max="100" value={number5} className="slider22">
        </input>
        <p>Number: {this.state.number5}</p>
        <input onInput={this.handleOnInput6} type="range" step="1" min="0"
          max="100" value={number6} className="slider22">
        </input>
        <p>Number: {this.state.number6}</p>
        <input onInput={this.handleOnInput7} type="range" step="1" min="0"
          max="100" value={number7} className="slider">
        </input>
        <p>Number: {this.state.number7}</p>
      </div>
    )
  }
}

export default Growth
