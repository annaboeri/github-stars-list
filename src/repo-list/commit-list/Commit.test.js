import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Commit from './Commit';

describe('Commit Component', () => {
  it('should render correctly', (done) => {
    const props = {
      commit: {
        html_url: '/',
        commit: {
          message: 'my commit message',
          author: {
            name: 'my name' ,
            date: "2019-12-07T14:47:48Z",
          }
        }
      }
    }
    const component = shallow(<Commit {...props} />);
    const tree = toJson(component);

    expect(tree).toMatchSnapshot();
    expect(component.find('.commit').exists()).toBe(true);
    done();
  });
});
