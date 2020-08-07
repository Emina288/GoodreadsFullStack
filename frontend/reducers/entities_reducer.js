import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import booksReducer from "./books_reducer";
import authorsReducer from "./authors_reducer";
import BookingsReducer from "./bookings_reducer";
import ReviewsReduces from "./reviews_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    books: booksReducer,
    authors: authorsReducer,
    bookings: BookingsReducer,
    reviews: ReviewsReduces
  });
  
  export default entitiesReducer;