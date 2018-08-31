import React, { Component } from 'react';
import './App.css';

class Slider1 extends Component {
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

      this.props.onValueChange(event.target.value)
    }

  render() {
    let { number } = this.state

    return (
      <div>
        <p>val: {number}</p>
        <input onInput={this.handleOnInput} type="range" step="1" min="0"
          max="100" value={number} className="slider22">
        </input>
        <p>val2: {100-number}</p>

      </div>
    )
  }
}
export default Slider1
