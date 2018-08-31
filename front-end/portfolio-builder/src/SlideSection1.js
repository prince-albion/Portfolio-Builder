import React, { Component } from 'react';
import './App.css';
import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';


class slideSecton1 extends Component {
  constructor(props) {
    super(props)

    this.handleValue1Change = this.handleValue1Change.bind(this)
    this.handleValue2Change = this.handleValue2Change.bind(this)
    this.handleValue3Change = this.handleValue3Change.bind(this)

    this.state = {equities: 100*this.props.growth,
      developed: 100*this.props.growth, uk: 100*this.props.growth}

    this.eq = this.props.eq
    this.prop = this.props.prop
    this.dev = this.props.dev
    this.em = this.props.em
    this.uk = this.props.uk
    this.devx = this.props.devx
    this.growth = this.props.growth

  }


  handleValue1Change(value) {
    {/*Functions to save the current state of a slider
      to be used in sliders that rely on that state's value*/}
    this.setState({equities: value})
  }

  handleValue2Change(value) {
    this.setState({developed: value})
  }

  handleValue3Change(value) {
    this.setState({uk: value})
  }
  render() {
    {/*Calculated variables based on slider positions*/}
    let equities = this.state.equities*this.growth
    let property = (100-this.state.equities)*this.growth
    let developed = (equities/100)*this.state.developed
    let emerge = (100-this.state.developed)*(equities/100)
    let uk = (developed/100)*this.state.uk
    let devxuk = (100-this.state.uk)*(developed/100)

    return (
      <div className="eqProp">

        <p>equities: {equities}</p>
        <p>property: {property}</p>

        <Slider1
          onValueChange={this.handleValue1Change}
        />

        <p>developed: {developed.toFixed(2)}</p>
        <p>emerging: {emerge.toFixed(2)}</p>
        <Slider2
          onValueChange={this.handleValue2Change}
        />

        <p>uk: {uk.toFixed(2)}</p>
        <p>developed (exc. uk): {devxuk.toFixed(2)}</p>
        <Slider3
          onValueChange={this.handleValue3Change}
        />

      </div>
    )
  }
}

export default slideSecton1
