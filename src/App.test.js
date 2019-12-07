import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from './App';

describe('Header Component', () => {
  it('should render app components correctly', (done) => {
    const component = shallow(<App />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
    expect(component.find('Header').exists()).toBe(true);
    expect(component.find('RepoListContainer').exists()).toBe(true);
    expect(component.find('Footer').exists()).toBe(true);
    done();
  });
});
