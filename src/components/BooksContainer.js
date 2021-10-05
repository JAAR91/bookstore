import React from 'react';
import Book from './Book';
import FormContainer from './FormContainer';
import store from '../redux/configureStores';

const BooksContainer = () => {
  const books = store.getState();
  console.log(books);
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
        <FormContainer />
      </div>
    </>
  );
};

export default BooksContainer;
