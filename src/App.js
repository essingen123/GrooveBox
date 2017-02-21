import React, { Component } from 'react';
import './App.css';
import Instructions from './Instructions';
import DrumMachine from './DrumMachine';
import Visualizer from './Visualizer';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      instructions: true,
      drumMachine: true,

    }
  }

  render() {
    return (
      <div className="App">
        <Instructions />
        <DrumMachine />
        <Visualizer />
        <div>player</div>
      </div>
    );
  }
}
