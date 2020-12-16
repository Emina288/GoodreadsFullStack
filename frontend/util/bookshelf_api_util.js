export const fetchBookshelves = () => {
  return $.ajax({
    url: "/api/bookshelves",
    method: "GET",
  });
};

export const fetchBookshelf = (bookshelfId) => {
  return $.ajax({
    url: `/api/bookshelves/${bookshelfId}`,
    method: "GET",
  });
};

export const createBookshelf = (bookshelf) => {
  return $.ajax({
    url: "api/bookshelves",
    method: "POST",
    data: { bookshelf },
  });
};

export const deleteBookshelf = (bookshelfId) => {
  return $.ajax({
    url: `/api/bookshelves/${bookshelfId}`,
    method: "DELETE",
  });
};

export const createBooking = (booking) => {
  return $.ajax({
    url: "api/bookings",
    method: "POST",
    data: { booking },
  });
};

export const deleteBooking = (bookId, shelfId) => {
  return $.ajax({
    url: `/api/bookings/${bookId}/${shelfId}`,
    method: "DELETE",
  });
};
