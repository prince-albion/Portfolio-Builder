import React, { Component } from 'react';
import './App.css';
import GrowthCanvas1 from './GrowthCanvas1';
import GrowthCanvas2 from './GrowthCanvas2';
import OverallRisk from './OverallRisk';
import Growth from './Growth';
import Defensive from './Defensive'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Portfolio Builder</h1>
        </header>
        <div>
          <GrowthCanvas2 />
          <GrowthCanvas1 />
          <OverallRisk />
          <Growth />
          <Defensive />
        </div>
        <div className="Space"></div>
      </div>
    );
  }
}

export default App;
