import React, { Component } from 'react';


export default class App extends Component {
  constructor(){
    super()
    this.state={
      playMusic: false,
      currentStep: 0,
      drumRacks: {
        kick: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        snare: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        hiHat: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        ride: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      },
    }
  }

  toggleStep(key, index) {
    let newRack = this.state.drumRacks
    newRack[key][index] = !newRack[key][index]
    this.setState({ drumRacks: newRack })
  }

  playPause() {
    this.setState({ playMusic: !this.state.playMusic })
  }

  playStep() {
    if (this.state.playMusic){
      Object.keys(this.state.drumRacks).forEach((key)=>{
        //play sounds here
       console.log(this.state.drumRacks[key][this.state.currentStep])
      })
      if (this.state.currentStep < 15){
        this.setState({currentStep: this.state.currentStep + 1})
      } else {
        this.setState({currentStep: 0})
      }
    }
  }

  playLoop() {
    setInterval(this.playStep.bind(this), 200)
  }

  render() {

    const Children = React.cloneElement(this.props.children, {
      toggleStep: this.toggleStep.bind(this),
      playPause: this.playPause.bind(this),
      currentStep: this.state.step,
      drumRacks: this.state.drumRacks,
    })

    return (
      <div className="App">
        <div className="audio-player" onClick={()=>this.playLoop()}>audio player</div>
        {Children}
      </div>
    );
  }
}
