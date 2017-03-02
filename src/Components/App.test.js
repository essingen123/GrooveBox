import React from 'react';
import { render, mount, shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiJsx from 'chai-jsx';
import sinon from 'sinon';

import App, {toggleStep} from './App';
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

  it.skip('should have a toggleStep function', ()=> {
    let wrapper = mount(<App children={<DrumMachine />}/>)
    // console.log(wrapper.debug())
    let component = wrapper.find('Component')
    // console.log(component.debug)
    chai.expect(component.toggleStep()).ok()
  });

  it.skip('should have a mute function', () =>{

  })

  it.skip('should have a playPause function', () =>{

  })

  it.skip('should have a playLoop function', () => {

  })

  it.skip('should have a tempo function', () =>{

  })

  it.skip('should have a toggleCanvas function', () =>{

  })

  it.skip('toggleStep should update state', ()=>{

  })

  it.skip('mute should update state', ()=>{

  })

  it.skip('playPause should update state', ()=>{

  })

  it.skip('toggleCanvas should update state', ()=>{

  })

  it('should call componentDidMount', ()=>{
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App children={<DrumMachine />} />);
    chai.expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  })


});
