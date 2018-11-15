// This file holds action creates which dispatches actions that are from different files or domains.

import { setCurrentPerson } from './personActions';
import { setModalOpen } from './modalActions';
import { includeSelectedInQuery, excludeSelectedInQuery } from './filterActions';
import { fetchPersonsIfNeeded } from './searchActions';

export const clickPersonCard = data => (dispatch) => {
  dispatch(setCurrentPerson(data));
  dispatch(setModalOpen());
};

export const pressEnterPersonCard = (event, person) => (dispatch) => {
  const KEY_ENTER = 13;
  const KEY_SPACE = 32;
  if (event.which === KEY_ENTER || event.which === KEY_SPACE) {
    dispatch(clickPersonCard(person));
  }
};

export const onFilterCheck = selected => (dispatch, getState) => {
  if (getState().filter.includes(selected)) {
    dispatch(excludeSelectedInQuery(selected));
    dispatch(fetchPersonsIfNeeded(getState().request.searchTerm));
  } else {
    dispatch(includeSelectedInQuery(selected));
    dispatch(fetchPersonsIfNeeded(getState().request.searchTerm));
  }
};
