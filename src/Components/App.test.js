import React from 'react';
import { render, mount, shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiJsx from 'chai-jsx';
import sinon from 'sinon';

import App from './App';
import Instructions from './Instructions';
import DrumMachine from './DrumMachine';

chai.use(chaiEnzyme())
chai.use(chaiJsx)

describe('<App/>', ()=> {
  it('renders an instructions component', () => {
    shallow(<App children={<Instructions />}/>)
  });

  it('renders an drumMachine component', () => {
    shallow(<App children={<DrumMachine />}/>)
  });

  it('should have drumracks in state', ()=> {
    let wrapper = shallow(<App children={<DrumMachine />}/>)
    chai.expect(wrapper.state('drumRacks').E40).to.eql([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
  });

});
  //toggle mute function

  //playPause function

  //play step function

  //play loop function

  //update tempo function
