import { SET_CURRENT_PERSON } from './types';

export const setCurrentPerson = data => ({ type: SET_CURRENT_PERSON, data });

export default setCurrentPerson;

// The linter prefers defualt exports when there is only one thing exported.
// To keep conistency when importing both from files with one export and files with several
// we decided to export both specifically and default.
// if more exports are added default will be removed.
