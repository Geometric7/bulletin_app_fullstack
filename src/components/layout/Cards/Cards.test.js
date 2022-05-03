import React from 'react';
import { shallow } from 'enzyme';
import { CardsComponent } from './Cards';

describe('Component Cards', () => {
  it('should render without crashing', () => {
    const component = shallow(<CardsComponent posts={[]}/>);
    expect(component).toBeTruthy();
  });
});
