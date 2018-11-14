import { INCLUDE_SELECTED, EXCLUDE_SELECTED } from '../utils/constants';

export const includeSelectedInQuery = selected => ({ type: INCLUDE_SELECTED, selected });
export const excludeSelectedInQuery = selected => ({ type: EXCLUDE_SELECTED, selected });
