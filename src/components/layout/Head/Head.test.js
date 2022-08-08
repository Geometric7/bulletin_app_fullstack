import React from 'react';
import { shallow } from 'enzyme';
import { HeadComponent } from './Head';

describe('Component Head', () => {
  it('should render without crashing', () => {
    const component = shallow(<HeadComponent />);
    expect(component).toBeTruthy();
  });
});
