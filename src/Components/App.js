import React, { Component } from 'react';
import howler from 'howler';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      playMusic: false,
      e40: true,
      currentStep: 0,
      tempo: 200,
      drumRacks: {
        E40: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        Kick: [false,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false],
        Clap: [false,false,true,false,false,false,true,false,false,false,true,false,false,false,true,false],
        ClosedHat: [false,true,true,true,true,true,true,true,true,false,true,false,true,false,true,true],
        OpenHat: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
      },
      mute: {Kick: false, OpenHat: false, ClosedHat: false, Clap: false, E40: false},
    }
  }

  componentDidMount() {
    this.playLoop()
  }

  toggleStep(key, index) {
    let newRack = this.state.drumRacks
    newRack[key][index] = !newRack[key][index]
    this.setState({ drumRacks: newRack })
  }

  toggleMute(keyPress) {
    let newMute = this.state.mute;
    switch (keyPress) {
      case 49:
        newMute['Bass'] = !newMute['Bass'];
        break;
      case 50:
        newMute['Kick'] = !newMute['Kick'];
        break;
      case 51:
        newMute['Clap'] = !newMute['Clap'];
        break;
      case 52:
        newMute['ClosedHat'] = !newMute['ClosedHat'];
        break;
      case 53:
        newMute['OpenHat'] = !newMute['OpenHat'];
        break;
      default:
      return;
    }
    this.setState({ mute: newMute })
  }

  playPause() {
    this.setState({ playMusic: !this.state.playMusic })
  }



  playStep() {
    let e40sample;
    {this.state.e40 ? e40sample = (new howler.Howl({src: ['Sounds/E40-Nope.mp3']})) : e40sample = (new howler.Howl({src: ['Sounds/E40-Yup.mp3']}))}
    let sounds = {
      E40: e40sample,
      Kick: new howler.Howl({src: ['Sounds/Kick.mp3']}),
      OpenHat: new howler.Howl({src: ['Sounds/OpenHat.mp3']}),
      ClosedHat: new howler.Howl({src: ['Sounds/ClosedHat.mp3']}),
      Clap: new howler.Howl({src: ['Sounds/Clap.mp3']}),
    }

    if (this.state.playMusic){
      Object.keys(this.state.drumRacks).forEach((key)=>{
        if(this.state.drumRacks[key][this.state.currentStep] && key==='E40'){this.setState({e40: !this.state.e40})}
        if(this.state.drumRacks[key][this.state.currentStep] && (!this.state.mute[key])){
          sounds[key].play()
        }
      })
      if (this.state.currentStep < 15){
        this.setState({currentStep: this.state.currentStep + 1})
      } else {
        this.setState({currentStep: 0})
      }
    }
  }

  playLoop() {
    this.playStep()
    setTimeout(this.playLoop.bind(this),this.state.tempo)
  }

  updateTempo(e) {
    this.setState({tempo: +e.target.value})
  }


  render() {
    const Children = React.cloneElement(this.props.children, {
      toggleStep: this.toggleStep.bind(this),
      playPause: this.playPause.bind(this),
      updateTempo: this.updateTempo.bind(this),
      toggleMute: this.toggleMute.bind(this),
      currentStep: this.state.currentStep,
      drumRacks: this.state.drumRacks,
      tempo: this.state.tempo,
      mute: this.state.mute,
    })

    return (
      <div className="App">
        {Children}
      </div>
    );
  }
}
