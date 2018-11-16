import { API_ENDPOINT, IMG_URL_BASE, PAGE_SIZE } from './constants';

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
const prepareSortString = (sortBy, order) => {
  const dirStr = order ? `&order=${order}` : '';
  return `&sortBy=${sortBy}${dirStr}`;
};

export const createSearchQueryString = (query, filter, pageNum, sortBy) => {
  const filterString = prepareFilterString(filter);
  const paginationString = preparePaginationString(pageNum);
  const sortString = prepareSortString(sortBy);
  return `${API_ENDPOINT}people?search=${query}${filterString}${paginationString}${sortString}`;
};

export const getImgURL = id => `${IMG_URL_BASE}${id}.jpg`;
