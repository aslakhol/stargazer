import { API_ENDPOINT, IMG_URL_BASE, PAGE_SIZE, SEACH_HISTORY_ENTRIES } from './constants';

const prepareFilterString = (filter) => {
  if (filter.length === 0) {
    return '';
  }
  const joined = filter.map(s => `${s},`).join('');
  return `&exclude=${joined}`.toLowerCase();
};

const preparePaginationString = (pageNum = 0) => {
  // expects 0-indexed page number
  const offset = PAGE_SIZE * pageNum;
  return `&limit=${PAGE_SIZE}&offset=${offset}`;
};

// This function was designed to make it easy to enable changing of sort directions.
const prepareSortString = (column, direction) => {
  const dirStr = direction ? `&direction=${direction}` : '';
  return `&column=${column}${dirStr}`;
};

export const createSearchQueryString = (query, filter, pageNum, column) => {
  const filterString = prepareFilterString(filter);
  const paginationString = preparePaginationString(pageNum);
  const sortString = prepareSortString(column);
  return `${API_ENDPOINT}people?search=${query}${filterString}${paginationString}${sortString}`;
};

export const getImgURL = id => `${IMG_URL_BASE}${id}.jpg`;

export const getHistoryUrl = () => `${API_ENDPOINT}${SEACH_HISTORY_ENTRIES}`;
