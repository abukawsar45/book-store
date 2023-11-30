import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from './LoaderSpinner';

const BookDetails = () => {
  
  const navigation = useNavigation();
  const { state } = navigation;
  
  if (state === '') {
    return <LoadingSpinner/>
  }
  
  const bookData = useLoaderData();
  console.log(bookData)
  const {
    image,
    price,
    title,
    subtitle,
    isbn10,
    isbn13,
    year,
    rating,
    publisher,
    pages,
    language,
    authors,
    desc,
    url
  } = bookData || {};
  
  console.log(bookData);

  const [isFold, setIsFold] = useState(true);

  return (
    <div className='my-container'>
      <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto '>
        {/* image container */}
        <div className='lg:w-1/2 h-full '>
          <img
            src={image}
            alt='book-cover'
            className=' object-cover w-full lg:h-full'
          />
        </div>
        {/* details container */}
        <div className='p-8 bg:white lg:p-16 lg:pl-10 lg:w-1/2'>
          <div>
            <p className='badge'>Brand new</p>
          </div>
          <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
            {title}
          </h5>
          <p className='text-gray-900'>Authors: {authors}</p>
          <p className='text-gray-900'>Publisher: {publisher}</p>
          <p className='text-gray-900'>Year: {year}</p>
          <p className='mb-5 text-gray-900'>Rating: {rating}</p>
          {isFold ? (
            <>
              <p className='text-gray-500'>
                {desc.substring(0, 120)}......
                <span
                  className='text-blue-500 cursor-pointer'
                  onClick={() => setIsFold(false)}
                >
                  see more
                </span>{' '}
              </p>
            </>
          ) : (
            <>
              <p className=''>
                {desc}......
                <span
                  className='text-blue-600 cursor-pointer'
                  onClick={() => setIsFold(true)}
                >
                  see less
                </span>{' '}
              </p>
            </>
          )}
          <div className='flex gap-5 mt-8 items-center'>
            <a href={url} target='_blank' className='btn'>
              Buy Now
            </a>
            <p className='items-center font-extrabold text-gray-600 '>
              Price: {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;