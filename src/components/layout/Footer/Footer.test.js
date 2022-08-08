import React from 'react';
import { shallow } from 'enzyme';
import { FooterComponent } from './Footer';

describe('Component Footer', () => {
  it('should render without crashing', () => {
    const component = shallow(<FooterComponent />);
    expect(component).toBeTruthy();
  });
});
