import React from 'react';
import { render, mount, shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiJsx from 'chai-jsx';
import sinon from 'sinon';

import App from './App';
import Instructions from './Instructions';


describe('<App/>', ()=> {
  it('renders without crashing', () => {
    shallow(<App children={<Instructions />}/>)
  });
  //check for different child components, instructions, drummachine, visualizer

  //toggleStep function

  //toggle mute function

  //playPause function

  //play step function

  //play loop function

  //update tempo function
})

describe('<DrumMachine/>', ()=>{
  //stub out state of drum racks

  
})
