import { OPEN_MODAL, CLOSE_MODAL } from '../constants';

export const setModalOpen = () => ({ type: OPEN_MODAL });
export const setModalClosed = () => ({ type: CLOSE_MODAL });
