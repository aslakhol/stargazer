/* ----  Action Types ---- */

// UI State
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// Data Related
export const SET_CURRENT_PERSON = 'SET_CURRENT_PERSON';

// Query related
export const REQUEST_PERSON = 'REQUEST_PERSON';
export const RECIEVE_PERSON = 'RECIEVE_PERSON';
export const NEW_QUERY = 'NEW_QUERY';
export const NEW_TIMEOUT = 'NEW_TIMEOUT';
export const INCLUDE_SELECTED = 'INCLUDE_SELECTED';
export const EXCLUDE_SELECTED = 'EXCLUDE_SELECTED';
export const SORT_BY_SELECTED = 'SORT_BY_SELECTED';

// Pagination
export const SET_PAGE = 'SET_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';

/* ---- Constants ---- */
export const API_TIMEOUT_DURATION = 500;
export const API_ENDPOINT = 'http://it2810-06.idi.ntnu.no/api/api/';
export const IMG_URL_BASE = 'https://starwars-visualguide.com/assets/img/characters/';
export const PAGE_SIZE = 4;
