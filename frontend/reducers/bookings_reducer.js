import { NEW_BOOKING, DELETE_BOOKING } from "../actions/bookshelf_action";

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case NEW_BOOKING:
      const addBooking = action.booking;
      return Object.assign({}, state, { [addBooking.id]: addBooking });
    case DELETE_BOOKING:
      const nState = Object.assign({}, state);
      delete nState[action.bookingId];
      return nState;
    default:
      return state;
  }
};

export default BookingsReducer;
