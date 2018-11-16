import { INCLUDE_SELECTED, EXCLUDE_SELECTED, SORT_BY_SELECTED } from '../utils/constants';

export const includeSelectedInQuery = selected => ({ type: INCLUDE_SELECTED, selected });
export const excludeSelectedInQuery = selected => ({ type: EXCLUDE_SELECTED, selected });
export const sortBySelected = selected => ({ type: SORT_BY_SELECTED, selected });
