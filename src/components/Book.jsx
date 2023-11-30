import React from 'react';
import { Link, useNavigation } from 'react-router-dom';

const Book = ({ book }) => {
  const { image, price, title, subtitle, isbn13 } = book || {};

  const navigation = useNavigation();
  const { state } = navigation;

  if(state === ''){
return <h2>loading </h2>
  }
  return (
    <Link to={`../book/${isbn13}`}>
      <div className='overflow-hidden relative transition duration-300 transform hover:-translate-y-2 rounded hover:shadow-2xl'>
        <img
          src={image}
          alt='book-cover'
          className='object-cover w-full h-56 md:h-64 xl:h-80'
        />
        <div className='bg-black px-6 py-4 bg-opacity-60 opacity-0 hover:opacity-100 text-slate-200 absolute inset-0 transition-opacity duration-300 flex flex-col'>
          <p className='text-xl' >{book.title} </p>
          <br />
          <p>{subtitle.substring(0, 60)}... </p>
          <br />
          <p className='mt-auto'>Price: {price}$</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;