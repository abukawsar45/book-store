import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';
import { useNavigation } from 'react-router-dom';
import LoaderSpinner from './LoaderSpinner';

const Books = () => {
 
  const navigation = useNavigation();
  const { state } = navigation;
console.log(state)

  if (state === 'loading') {
    return <LoaderSpinner/>
  }
  const {books} = useLoaderData();

  // clg
  console.log({ books });


  return (
    <div className='my-container' >
      <div className="grid gap-6 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {books.map((book) => (
        <Book key={book.isbn13} book={book} />
        ))}
        </div>
    </div>
  );
};

export default Books;