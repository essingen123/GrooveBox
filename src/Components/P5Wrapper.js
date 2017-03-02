//SHOUTOUT to https://github.com/NeroCor for building a handy p5 react Component

import React from 'react';
import p5 from 'p5';
import 'p5/lib/addons/p5.sound.js';

export default class P5Wrapper extends React.Component {

  componentWillMount() {
  }

  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.wrapper);
    if(this.canvas.reDraw) {
      this.canvas.reDraw(this.props);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.sketch !== nextProps.sketch){
      this.wrapper.removeChild(this.wrapper.childNodes[0]);
      this.canvas = new p5(nextProps.sketch, this.wrapper);
    }
    if( this.canvas.reDraw ) {
      this.canvas.reDraw(nextProps);
    }
  }

  componentWillUnmount() {
    console.log(this.wrapper.childNodes[0])
    this.wrapper.removeChild(this.wrapper.childNodes[0])
    console.log(this.wrapper.childNodes[0])
  }

  render() {
    return <div ref={wrapper => this.wrapper = wrapper}></div>;
  }

}
