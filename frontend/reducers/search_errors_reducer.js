import { ADD_BOOKS, RECIVE_SEARCH_ERRORS } from "../actions/book_actions";
import { CLEAR_ERRORS } from "../actions/session_actions";

const searchErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECIVE_SEARCH_ERRORS:
      return Object.assign({}, state, action.errors);
    case ADD_BOOKS:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default searchErrorsReducer;
