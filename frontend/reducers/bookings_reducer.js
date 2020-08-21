import { NEW_BOOKING } from "../actions/bookshelf_action";

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case NEW_BOOKING:
      const addBooking = action.booking;
      return Object.assign({}, state, { [addBooking.id]: addBooking });
    default:
      return state;
  }
};

export default BookingsReducer;
