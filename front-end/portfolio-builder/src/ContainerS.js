import React, { Component } from 'react';
import './App.css';
import OverallRisk from './OverallRisk';
import Growth from './Growth';
import Defensive from './Defensive'

class ContainerS extends Component {
  render() {
    let growth = 1

    return (
      <div className="sliderContainer">
          <OverallRisk />
          <Growth growth={growth} />
          <Defensive />
      </div>
    )
  }
}

export default ContainerS
