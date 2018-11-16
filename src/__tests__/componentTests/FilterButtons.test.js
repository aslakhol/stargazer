import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FilterButtons from '../../components/FilterButtons';

describe('<FilterButtons />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<FilterButtons filter={[]} />);
    const component = wrapper.dive();

    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders 4 buttons', () => {
    const wrapper = shallow(<FilterButtons filter={[]} />);

    expect(wrapper.find('Button')).toHaveLength(4);
  });

  describe('onClick', () => {
    it('calls onCheck', () => {
      const mockOnCheck = jest.fn();
      const wrapper = shallow(<FilterButtons filter={[]} onCheck={mockOnCheck} />);

      const button = wrapper.find('Button').first();
      button.simulate('click');
      expect(mockOnCheck.mock.instances.length).toBe(1);
    });
  });
});
