import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import LeftSideBar from '../../Shared/LeftSideBar/LeftSideBar';

const MainLayout = () => {
  return (
    <div className="bg-[#121C22] h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-[20%] h-full overflow-y-auto">
          <LeftSideBar />
        </div>

        {/* Main Outlet */}
        <div className="w-[80%] h-full overflow-y-auto">
          <main className="p-4">
            <Outlet />
            

            <div className='mt-3'>
            <Footer />
            </div>
          </main>
        </div>


      </div>

    </div>
  );
};

export default MainLayout;
