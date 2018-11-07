// placeholder
import { add_person } from "../constants/types"

const peopleState = {
  people: []
};

export default (state = peopleState, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      };
    case add_person:
      return {
        ...state, people: [...state.people, action.payload]
      };
    default:
      return state
  }
}
