import React from 'react';
import Header from '../Header';
import { shallow } from 'enzyme';


describe('Header Functionality', function() {
  it('should render without throwing an error', function() {
    const wrapper = shallow(<Header/>);
    expect(wrapper.contains(<div id="site-header"></div>)).toBe(true);
    //expect(1).toBe(1);
  });
});
