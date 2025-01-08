import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import LeftSideBar from '../../Shared/LeftSideBar/LeftSideBar';

const MainLayout = () => {
  return (
    <div>
      <header className='sticky top-0 z-10'>
        <Navbar />
      </header>

      <div className='flex flex-col gap-4'>

        <div className='w-[30%] sticky top-0 '>
          <LeftSideBar />
        </div>

        <div className='w-[70%]'>
          <main>
            <Outlet />
          </main>
        </div>


      <footer className=''>
        <Footer />
      </footer>

      </div>

    </div>
  );
};

export default MainLayout;
