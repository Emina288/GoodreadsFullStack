import { RECEIVE_ERRORS_SHELF } from "../actions/bookshelf_action";

const shelvesErrorsReducer = (oldState = [], action) => {
  Object.freeze(action);
  switch (action.type) {
    case RECEIVE_ERRORS_SHELF:
      return action.errors;
    default:
      return oldState;
  }
};

export default shelvesErrorsReducer;
