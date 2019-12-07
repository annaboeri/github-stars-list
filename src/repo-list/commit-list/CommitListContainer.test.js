import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CommitListContainer from './CommitListContainer';

describe('CommitListContainer', () => {
  it('should render loading state', (done) => {
    const component = shallow(<CommitListContainer />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
    expect(component.find('.loading-container').exists()).toBe(true);
    done();
  });

  it('should render commits', (done) => {
    const component = shallow(<CommitListContainer />);
    const tree = toJson(component);
    const mockState = { isLoaded: true }
    component.setState({ ...mockState });

    expect(tree).toMatchSnapshot();
    expect(component.find('.commit-list-container').exists()).toBe(true);
    done();
  });

  it('should render error state', (done) => {
    const component = shallow(<CommitListContainer />);
    const tree = toJson(component);
    const mockState = { error: true }
    component.setState({ ...mockState });

    expect(tree).toMatchSnapshot();
    expect(component.find('.error-container').exists()).toBe(true);
    done();
  });
});
