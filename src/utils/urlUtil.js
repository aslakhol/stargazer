import { API_ENDPOINT, IMG_URL_BASE } from './constants';

const prepareFilterString = (filter) => {
  if (filter.length === 0) {
    return '';
  }
  const joined = filter.map(s => `${s},`).join('');
  return `&exclude=${joined}`.toLowerCase();
};

export const createSearchQueryString = (query, filter) => {
  const filterString = prepareFilterString(filter);
  return `${API_ENDPOINT}people?search=${query}${filterString}`;
};

export const getImgURL = id => `${IMG_URL_BASE}${id}.jpg`;
