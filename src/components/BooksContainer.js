import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import FormContainer from './FormContainer';
import store from '../redux/configureStores';
import { addBook, removeBook } from '../redux/books/books';

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
      <div className="container px-0 py-4 border-bottom">
        {books.booksReducer.map((book) => (
          <div key={book.id}>
            <Book bookdata={book} removeBookfromStore={removeBookfromStore} />
          </div>
        ))}
      </div>
      <div className="container p-0 mt-3">
        <FormContainer submitBookToStore={submitBookToStore} />
      </div>
    </>
  );
};

export default BooksContainer;
