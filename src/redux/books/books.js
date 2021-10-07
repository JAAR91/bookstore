const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const ADD_BOOKS = 'bookStore/books/ADD_BOOKS';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_API_KEY = 'bookStore/books/GET_API_KEY';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';

const initialState = {};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getAPIbooks = (payload) => ({
  type: ADD_BOOKS,
  payload,
});

export const fetchBooks = () => ({
  type: FETCH_BOOKS,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return {
        ...state,
        [action.payload.id]: [{ title: action.payload.title, category: action.payload.category }],
      };
    case REMOVE_BOOK:
      return Object.keys(state)
        .filter((key) => key !== action.payload.id)
        .reduce((prev, key) => ({ ...prev, [key]: state[key] }), {});
    default:
      return state;
  }
};

export const fetchBooksAPI = (storeAPI) => (next) => (action) => {
  switch (action.type) {
    case GET_API_KEY:
      fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/',
        {
          method: 'POST',
          redirect: 'follow',
        })
        .then((APIkey) => {
          const rootContainer = document.getElementById('root');
          rootContainer.innerHTML += `<p>API key: ${APIkey.text()}</p>`;
        });
      break;
    case ADD_BOOK:
      fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4CYrehtHybLPMMrg29Rc/books',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            item_id: action.payload.id,
            title: action.payload.title,
            category: action.payload.category,
          }),
          redirect: 'follow',
        })
        .then((response) => response.text());
      break;
    case REMOVE_BOOK:
      fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4CYrehtHybLPMMrg29Rc/books/${action.payload.id}`,
        {
          method: 'DELETE',
          Header: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            item_id: action.payload.id,
          }),
        })
        .then((response) => response.text());
      break;
    case FETCH_BOOKS:
      fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4CYrehtHybLPMMrg29Rc/books',
        {
          method: 'GET',
          Header: { 'Content-Type': 'application/json' },
        })
        .then((response) => response.json())
        .then((data) => {
          storeAPI.dispatch({ type: ADD_BOOKS, payload: data });
        });
      break;
    default:
      return next(action);
  }
  return next(action);
};

export default reducer;
