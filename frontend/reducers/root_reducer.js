import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import SessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import BookshelvesReducer from './bookshelves_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: SessionReducer,
  errors: errorsReducer,
  bookshelves: BookshelvesReducer,

});

export default rootReducer;