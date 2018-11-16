import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../../components/App';

describe('<App />', () => {
  describe('render()', () => {
    it('renders the component', () => {
      const component = shallow(<App persons={[]} query="" fetchPersonsIfNeeded={() => true} />);

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
