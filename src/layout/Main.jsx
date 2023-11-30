import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const Main = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;