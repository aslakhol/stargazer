import {
  API_ENDPOINT,
  REQUEST_HISTORY,
} from '../constants';

export const requestHistory = () => ({
  type: REQUEST_HISTORY,
});

export const fetchHistory = () => (dispatch) => {
  const historyUrl = `${API_ENDPOINT}search`;
  fetch(historyUrl)
    .then(response => response.json())
    .then((searches) => {
      dispatch(requestHistory());
      console.log(searches);
      return searches;
    });
};
