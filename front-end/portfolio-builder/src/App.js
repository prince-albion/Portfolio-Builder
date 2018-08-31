import React, { Component } from 'react';
import './App.css';
import GrowthCanvas from './GrowthCanvas';
import AllocCanvas from './AllocCanvas';
import ContainerS from './ContainerS';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Portfolio Builder</h1>
        </header>
        <div>
          <AllocCanvas />
          <GrowthCanvas />
          <ContainerS />
        </div>
      </div>
    );
  }
}

export default App;
