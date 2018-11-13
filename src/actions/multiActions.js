import { setCurrentPerson } from './personActions';
import { setModalOpen } from './modalActions';

export const clickPersonCard = data => (dispatch) => {
  dispatch(setCurrentPerson(data));
  dispatch(setModalOpen());
};

export const pressEnterPersonCard = (event, person) => (dispatch) => {
  if (event.which === 13) {
    dispatch(clickPersonCard(person));
  }
};
