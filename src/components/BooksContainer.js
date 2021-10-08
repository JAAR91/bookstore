import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import FormContainer from './FormContainer';
import store from '../redux/configureStores';
import { addBook, removeBook, fetchBooks } from '../redux/books/books';

store.dispatch(fetchBooks());

const BooksContainer = () => {
  const [books, setbooks] = useState(store.getState());

  store.subscribe(() => {
    setbooks(store.getState());
  });

  const submitBookToStore = (bookinfo) => {
    const newBook = {
      id: uuidv4(),
      title: bookinfo.title,
      author: 'bookinfo.author',
      category: bookinfo.category,
    };
    store.dispatch(addBook(newBook));
  };

  const removeBookfromStore = (id) => {
    store.dispatch(removeBook({ id }));
  };

  return (
    <>
      <div className="Books-container p-0">
        { Object.keys(books.booksReducer).map((key) => (
          <div key={key}>
            <Book
              bookdata={{ id: key, ...books.booksReducer[key][0] }}
              removeBookfromStore={removeBookfromStore}
            />
          </div>
        ))}
        <div className="Line-botton mx-0" />
        <FormContainer submitBookToStore={submitBookToStore} />
      </div>
    </>
  );
};

export default BooksContainer;
