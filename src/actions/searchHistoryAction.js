import {
  API_ENDPOINT,
  REQUEST_HISTORY,
  RECEIVE_HISTORY,
} from '../constants';

export const requestHistory = () => ({
  type: REQUEST_HISTORY,
});

export const receiveHistory = response => ({
  type: RECEIVE_HISTORY,
  response,
});

export const fetchHistory = () => (dispatch) => {
  const historyUrl = `${API_ENDPOINT}search`;
  dispatch(requestHistory());
  fetch(historyUrl)
    .then(response => response.json())
    .then(json => dispatch(receiveHistory(json)));
};
