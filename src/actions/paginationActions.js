import { SET_PAGE, NEXT_PAGE, PREV_PAGE } from '../utils/constants';

export const goToPage = pageNum => ({ type: SET_PAGE, pageNum });
export const goToNextPage = () => ({ type: NEXT_PAGE });
export const goToPrevPage = () => ({ type: PREV_PAGE });
