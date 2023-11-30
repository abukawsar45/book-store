import React from 'react';
import { useNavigation } from 'react-router-dom';

const Book = ({ book }) => {
  
  const navigation = useNavigation();
  const { state } = navigation;

  if(state === ''){
return <h2>loading </h2>
  }
  return (
    <div>
      single book page
    </div>
  );
};

export default Book;