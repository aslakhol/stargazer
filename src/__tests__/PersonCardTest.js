import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import configureStore from 'redux-mock-store'; // Smart components

// Component to be tested
import PersonCard from '../components/PersonCard';

const mockPerson = {
  name: 'C-3PO',
  url: 'https://swapi.co/api/people/2/',
};

describe('<PersonCard />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const component = shallow(<PersonCard person={mockPerson} />);

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
