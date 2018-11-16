import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SearchHistory from '../../components/SearchHistory';

describe('<SearchHistory />', () => {
  test('renders the component', () => {
    const wrapper = shallow(<SearchHistory />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
