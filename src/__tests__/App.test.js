import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { App } from '../App';

describe('<App />', () => {
  describe('render()', () => {
    it('renders the component', () => {
      const component = shallow(<App />);

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
