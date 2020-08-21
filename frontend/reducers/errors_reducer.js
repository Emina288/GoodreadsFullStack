import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import searchErrorsReducer from "./search_errors_reducer";
import shelvesErrorsReducer from "./shelves_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  search: searchErrorsReducer,
  shelf: shelvesErrorsReducer,
});

export default errorsReducer;
