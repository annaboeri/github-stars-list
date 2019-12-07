import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import RepoCard from './RepoCard';

describe('RepoCard Component', () => {
  const props = {
    repo: {
      name: 'My Repo Name',
      desc: 'My Repo Desc',
      html_url: '/',
      stargazers_count: 1,
      forks_count: 2,
      full_name: 'full/name',
    },
    handleErrors: jest.fn(),
  }

  it('should render correctly', (done) => {
    const component = shallow(<RepoCard {...props} />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
    expect(component.find('.flip-card').exists()).toBe(true);
    done();
  });
});
