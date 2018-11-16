import React from 'react';
import { PaginationItem, PaginationLink } from 'reactstrap';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import PageSelectContainer from '../../containers/PageSelectContainer';

const middleWares = [thunk];
const mockStore = configureStore(middleWares);
const initialState = {
  request: {
    count: 10,
    currentPage: 1,
  },
};
const store = mockStore(initialState);

describe('<PageSelectContainer />', () => {
  it('should render successfully', () => {
    const component = shallow(<PageSelectContainer store={store} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  describe('Clicking the buttons', () => {
    describe('first button', () => {
      it('is disabled', () => {
        const wrapper = shallow(<PageSelectContainer store={store} request={[]} />);
        const component = wrapper.dive();

        const paginationItem = component.find(PaginationItem).first();

        expect(toJson(paginationItem).props.disabled).toBe(false);
      });
    });

    describe('not first nor last button', () => {
      it('dispatches go to page', () => {
        const wrapper = shallow(<PageSelectContainer store={store} request={[]} />);
        const component = wrapper.dive();

        const paginationItem = component.find(PaginationItem).at(1);

        paginationItem.props().onClick();
        expect(store.getActions()).toMatchSnapshot();
      });
    });

    describe('last button', () => {
      it('dispatches go to next', () => {
        const wrapper = shallow(<PageSelectContainer store={store} request={[]} />);
        const component = wrapper.dive();

        const paginationItem = component.find(PaginationLink).last();

        paginationItem.props().onClick();
        expect(store.getActions()).toMatchSnapshot();
      });
    });
  });
});
