//SHOUTOUT to https://github.com/NeroCor for building a handy p5 react Component

import React from 'react';
import p5 from 'p5';
import 'p5/lib/addons/p5.sound.js';

export default class P5Wrapper extends React.Component {

  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.wrapper);
    if(this.canvas.reDraw) {
      this.canvas.reDraw(this.props);
    }
  }

  componentWillReceiveProps(newprops) {
    if(this.props.sketch !== newprops.sketch){
      this.wrapper.removeChild(this.wrapper.childNodes[0]);
      this.canvas = new p5(newprops.sketch, this.wrapper);
    }
    if( this.canvas.reDraw ) {
      this.canvas.reDraw(newprops);
    }
  }

  render() {
    return <div ref={wrapper => this.wrapper = wrapper}></div>;
  }
}
