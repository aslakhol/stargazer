import {
  API_ENDPOINT,
  REQUEST_HISTORY,
} from '../constants';


export const fetchHistory = (dispatch) => {
  const historyUrl = `${API_ENDPOINT}search`;
  fetch(historyUrl)
    .then(response => response.json())
    .then((searches) => {
      dispatch(requestHistory(searches.search_string));
      console.log('state', this.state.searches);
      return searches.search_string;
    })
    .catch(error => console.log(error));
};

export const requestHistory = search_string => ({
  type: REQUEST_HISTORY,
  payload: { search_string },
});
