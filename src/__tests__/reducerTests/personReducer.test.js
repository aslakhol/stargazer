import personReducer from '../../reducers/personReducer';
import { SET_CURRENT_PERSON } from '../../utils/constants';

const mockPerson = {
  name: 'C-3PO',
  url: 'https://swapi.co/api/people/2/',
};

describe('personReducer', () => {
  describe('INITIAL_STATE', () => {
    it('is correct', () => {
      const action = { type: 'DUMMY_ACTION' };
      const initialState = {};

      expect(personReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('SET_CURRENT_PERSON', () => {
    it('returns the correct state', () => {
      const action = { type: SET_CURRENT_PERSON, data: mockPerson };
      const expectedState = mockPerson;

      expect(personReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
