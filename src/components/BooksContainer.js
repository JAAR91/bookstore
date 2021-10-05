import React, { useState } from 'react';
import Book from './Book';
import FormContainer from './FormContainer';
import store from '../redux/configureStores';
import { addBook } from '../redux/books/books';

const BooksContainer = () => {
  const [books, setbooks] = useState(store.getState());

  store.subscribe(() => {
    setbooks(store.getState());
  });

  const submitBookToStore = (bookinfo) => {
    const newBook = {
      id: 45,
      title: bookinfo.title,
      author: 'bookinfo.author',
      category: bookinfo.category,
    };
    store.dispatch(addBook(newBook));
  };

  return (
    <>
      <div className="container px-0 py-4 border-bottom">
        {books.booksReducer.map((book) => (
          <div key={book.id}>
            <Book bookdata={book} />
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
