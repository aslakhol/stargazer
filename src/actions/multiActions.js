import { setCurrentPerson } from './personActions';
import { setModalOpen } from './modalActions';
import { showHistory, hideHistory } from './historyButtonAction';
import { fetchHistory } from './searchHistoryAction';

export const clickPersonCard = data => (dispatch) => {
  dispatch(setCurrentPerson(data));
  dispatch(setModalOpen());
};

export const clickHistoryButton = () => (dispatch, getState) => {
  if (!getState().history.isOpen) {
    dispatch(showHistory());
    dispatch(fetchHistory());
  } else {
    dispatch(hideHistory());
  }
};

export const pressEnterPersonCard = (event, person) => (dispatch) => {
  const KEY_ENTER = 13;
  const KEY_SPACE = 32;
  if (event.which === KEY_ENTER || event.which === KEY_SPACE) {
    dispatch(clickPersonCard(person));
  }
};
