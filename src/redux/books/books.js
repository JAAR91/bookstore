const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [{
  id: 1,
  title: 'Lord of the Rings',
  author: 'Novel by J. R. R. Tolkien',
  category: 'Fantasy',
  progress: 'chapter 2',
  complete: '10%',
},
{
  id: 2,
  title: 'Harry Potter',
  author: 'J. K. Rowling',
  category: 'Fantasy',
  progress: 'chapter 4',
  complete: '20%',
}];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
        progress: 'chapter 1',
        complete: '0%',
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
