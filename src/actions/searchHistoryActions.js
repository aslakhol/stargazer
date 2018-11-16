import {
  REQUEST_HISTORY,
  RECEIVE_HISTORY,
} from '../utils/constants';
import { getHistoryUrl } from '../utils/urlUtil';

export const requestHistory = () => ({
  type: REQUEST_HISTORY,
});

export const receiveHistory = response => ({
  type: RECEIVE_HISTORY,
  response,
});

export const fetchHistory = () => (dispatch) => {
  const historyUrl = getHistoryUrl();
  console.log(historyUrl);
  dispatch(requestHistory());
  fetch(historyUrl)
    .then(response => response.json())
    .then(json => dispatch(receiveHistory(json)));
};
