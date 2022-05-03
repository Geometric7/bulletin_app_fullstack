import React from 'react';
import { shallow } from 'enzyme';
import { PageNavComponent } from './PageNav';

describe('Component PageNav', () => {
  it('should render without crashing', () => {
    const component = shallow(<PageNavComponent />);
    expect(component).toBeTruthy();
  });
});
