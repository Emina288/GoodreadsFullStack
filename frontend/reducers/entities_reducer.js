import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import booksReducer from "./books_reducer";
import authorsReducer from "./authors_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    books: booksReducer,
    authors: authorsReducer
  });
  
  export default entitiesReducer;