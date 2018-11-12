import modalReducer from '../../reducers/modalReducer';
import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/types';

describe('modalReducer', () => {
  describe('INITIAL_STATE', () => {
    it('is correct', () => {
      const action = { type: 'DUMMY_ACTION' };
      const initialState = false;

      expect(modalReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('OPEN_MODAL', () => {
    it('returns the correct state', () => {
      const action = { type: OPEN_MODAL, data: true };
      expect(modalReducer(undefined, action)).toMatchSnapshot();
    });
  });

  describe('CLOSE_MODAL', () => {
    it('returns the correct state', () => {
      const action = { type: CLOSE_MODAL, data: false };
      expect(modalReducer(undefined, action)).toMatchSnapshot();
    });
  });
});
