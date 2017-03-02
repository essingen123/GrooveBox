import React from 'react';
import { render, mount, shallow } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';

import App from './App';
import Visualizer from './Visualizer';


describe('Visualizer', function () {

  //need to stub out window.audioContext somehow?!
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <App children={<Visualizer />} />
    )
  })

  it.skip('renders an canvas', () => {
    chai.expect(wrapper.find('canvas')).to.have.length(1)
  });

  it.skip('renders an instructions link', () => {
    chai.expect(wrapper.find('#instructions-link')).to.have.length(1)
  });

  it.skip('renders an link to drums', () => {
    chai.expect(wrapper.find('#drum-link')).to.have.length(1)
  });

})
