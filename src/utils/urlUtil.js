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

export const createSearchQueryString = (query, filter, pageNum) => {
  const filterString = prepareFilterString(filter);
  const paginationString = preparePaginationString(pageNum);
  return `${API_ENDPOINT}people?search=${query}${filterString}${paginationString}`;
};

export const getImgURL = id => `${IMG_URL_BASE}${id}.jpg`;
