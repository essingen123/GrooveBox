

import React from 'react';
import { render, mount, shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import chaiJsx from 'chai-jsx';
import sinon from 'sinon';

// import P5Wrapper from './P5Wrapper';


chai.use(chaiEnzyme())
chai.use(chaiJsx)

describe('<P5Wrapper/>', ()=> {

  it.skip('should call componentDidMount', ()=>{
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<P5Wrapper />);
    chai.expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  })
})
