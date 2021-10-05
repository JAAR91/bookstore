import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import notiReduce from './Notifications/Notification';

const reducer = combineReducers({
  booksReducer,
  notiReduce,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
