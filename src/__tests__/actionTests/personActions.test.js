import configureStore from 'redux-mock-store';

import * as personActions from '../../actions/personActions';
import { SET_CURRENT_PERSON } from '../../actions/types';

const mockStore = configureStore();
const store = mockStore();
const mockPerson = {
  name: 'C-3PO',
  url: 'https://swapi.co/api/people/2/',
};

describe('personActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('setCurrentPerson', () => {
    it('dispatches the right action with the right data.', () => {
      const expectedActions = [
        {
          type: SET_CURRENT_PERSON,
          data: mockPerson,
        },
      ];

      store.dispatch(personActions.setCurrentPerson(mockPerson));
      expect(store.getActions()).toEqual(expectedActions);
    });

    // This snapshot test serves the same purpose as the test above.
    // Both versions are included to demonstrate two methods for performing the same test.
    it('matches snapshot.', () => {
      store.dispatch(personActions.setCurrentPerson(mockPerson));
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
