import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from './Header';

describe('Header Component', () => {
  it('should render correctly', (done) => {

    const component = shallow(<Header />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
    expect(component.find('.header').exists()).toBe(true);
    done();
  });
});
