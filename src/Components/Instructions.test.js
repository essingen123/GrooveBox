import React from 'react';
import { render, mount, shallow } from 'enzyme';
import chai from 'chai';
import sinon from 'sinon';

import App from './App';
import Instructions from './Instructions';


describe('Instructions', function () {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <App children={<Instructions />} />
    )
  })

  it('renders an instructions-container', () => {
    chai.expect(wrapper.find('#instructions-container')).to.have.length(1)
  });

  it('renders an instructions list', () => {
    chai.expect(wrapper.find('li')).to.have.length(3)
  });

  it('renders an link to drums', () => {
    chai.expect(wrapper.find('#link-to-drums')).to.have.length(1)
  });

})
