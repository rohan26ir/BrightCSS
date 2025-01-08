import React from 'react';

const LeftSideBar = () => {
  return (
    <div className='bg-orange-500'>
      <div className='flex flex-col min-h-screen px-6 py-5'>

        <div><h2>Docs</h2></div>
        <div><h2>Components</h2></div>
        <div>Data Display</div>
        <div>Support BrightCSS</div>

      </div>
    </div>
  );
};

export default LeftSideBar;