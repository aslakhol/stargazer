import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as multiActions from '../../actions/multiActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();
const mockPerson = {
  name: 'C-3PO',
  url: 'https://swapi.co/api/people/2/',
};

describe('multiActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('clickPersonCard', () => {
    it('matches snapshot.', () => {
      store.dispatch(multiActions.clickPersonCard(mockPerson));
      expect(store.getActions()).toMatchSnapshot();
    });
  });
});
