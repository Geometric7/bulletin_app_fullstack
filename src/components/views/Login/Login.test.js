/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import { LoginComponent } from './Login';

describe('Component Login', () => {
  it('should render without crashing', () => {
    const component = shallow(<LoginComponent />);
    expect(component).toBeTruthy();
  });
});
