import { OPEN_MODAL, CLOSE_MODAL } from './types';

export const setModalOpen = () => ({ type: OPEN_MODAL });
export const setModalClosed = () => ({ type: CLOSE_MODAL });
