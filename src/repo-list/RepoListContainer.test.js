import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import RepoListContainer from './RepoListContainer';

describe('RepoListContainer', () => {
  it('should render loading state', (done) => {
    const component = shallow(<RepoListContainer />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
    expect(component.find('.loading-container').exists()).toBe(true);
    done();
  });

  it('should render repos', (done) => {
    const component = shallow(<RepoListContainer />);
    const tree = toJson(component);
    const mockState = { isLoaded: true }
    component.setState({ ...mockState });

    expect(tree).toMatchSnapshot();
    expect(component.find('.repo-list-container').exists()).toBe(true);
    done();
  });

  it('should render error state', (done) => {
    const component = shallow(<RepoListContainer />);
    const tree = toJson(component);
    const mockState = { error: true }
    component.setState({ ...mockState });

    expect(tree).toMatchSnapshot();
    expect(component.find('.error-container').exists()).toBe(true);
    done();
  });
});
