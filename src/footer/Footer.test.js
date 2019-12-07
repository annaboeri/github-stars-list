import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Footer from './Footer';

describe('Footer Component', () => {
  it('should render correctly', (done) => {

    const component = shallow(<Footer />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
    expect(component.find('.footer').exists()).toBe(true);
    done();
  });
});
