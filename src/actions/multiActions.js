// This file holds action creates which dispatches actions that are from different files or domains.

import { setCurrentPerson } from './personActions';
import { setModalOpen } from './modalActions';
import { showHistory, hideHistory } from './historyButtonAction';
import { fetchHistory } from './searchHistoryActions';
import { includeSelectedInQuery, excludeSelectedInQuery, sortBySelected } from './buttonActions';
import { fetchPersonsIfNeeded } from './searchActions';
import { goToPage, goToNextPage, goToPrevPage } from './paginationActions';

export const clickGoToPage = pageNum => (dispatch, getState) => {
  dispatch(goToPage(pageNum));
  dispatch(fetchPersonsIfNeeded(getState().request.searchTerm));
};

export const clickGoToNextPage = () => (dispatch, getState) => {
  dispatch(goToNextPage());
  dispatch(fetchPersonsIfNeeded(getState().request.searchTerm));
};

export const clickGoToPrevPage = () => (dispatch, getState) => {
  dispatch(goToPrevPage());
  dispatch(fetchPersonsIfNeeded(getState().request.searchTerm));
};

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

export const onFilterCheck = selected => (dispatch, getState) => {
  if (getState().filter.includes(selected)) {
    dispatch(excludeSelectedInQuery(selected));
    dispatch(fetchPersonsIfNeeded(getState().request.searchTerm));
  } else {
    dispatch(includeSelectedInQuery(selected));
    dispatch(fetchPersonsIfNeeded(getState().request.searchTerm));
  }
};

export const onSortPress = selected => (dispatch, getState) => {
  dispatch(sortBySelected(selected));
  dispatch(fetchPersonsIfNeeded(getState().request.searchTerm));
};
