import React from 'react';
import Book from '../components/Book';
import FormContainer from '../components/FormContainer';

const BooksContainer = () => {
  const books = [{
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

  return (
    <>
      <div className="container px-0 py-4 border-bottom">
        {books.map((book) => (
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
