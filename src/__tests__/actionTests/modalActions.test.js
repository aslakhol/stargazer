import configureStore from 'redux-mock-store';

import * as modalActions from '../../actions/modalActions';
import { OPEN_MODAL, CLOSE_MODAL } from '../../utils/constants';

const mockStore = configureStore();
const store = mockStore();

describe('modalActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('setModalOpen', () => {
    it('dispatches the right action.', () => {
      const expectedActions = [
        {
          type: OPEN_MODAL,
        },
      ];

      store.dispatch(modalActions.setModalOpen());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('setModalClosed', () => {
    it('dispatches the right action.', () => {
      const expectedActions = [
        {
          type: CLOSE_MODAL,
        },
      ];

      store.dispatch(modalActions.setModalClosed());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
