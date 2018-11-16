import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PersonCard from '../../components/PersonCard';

const mockPerson = {
  name: 'C-3PO',
  url: 'https://swapi.co/api/people/2/',
};

describe('<PersonCard />', () => {
  describe('render()', () => {
    it('renders the component', () => {
      const component = shallow(<PersonCard person={mockPerson} />);

      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('onClick', () => {
    it('calls onClick', () => {
      const mockOnClick = jest.fn();
      const component = shallow(<PersonCard person={mockPerson} onClick={mockOnClick} />);

      component.simulate('click');
      expect(mockOnClick.mock.instances.length).toBe(1);
    });
  });
});
