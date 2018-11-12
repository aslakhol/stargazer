import { setCurrentPerson } from './personActions';
import { setModalOpen } from './modalActions';

export const clickPersonCard = data => (dispatch) => {
  dispatch(setCurrentPerson(data));
  dispatch(setModalOpen());
};

export default clickPersonCard;

// The linter prefers defualt exports when there is only one thing exported.
// To keep conistency when importing both from files with one export and files with several
// we decided to export both specifically and default.
// if more exports are added default will be removed.
