import React, { useState } from 'react';
import { TbClick } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
  const [showDocs, setShowDocs] = useState(true);
  const [showComponents, setShowComponents] = useState(true);
  const [showTheme, setShowTheme] = useState(true);


  return (
    <div className="bg-orange-500">
      <div className="flex flex-col min-h-screen px-6 py-5">

        {/* Docs Section */}
        <div>
          <h2 className="text-2xl font-bold cursor-pointer" onClick={() => setShowDocs(!showDocs)}>
            Docs
          </h2>
          {showDocs && (
            <ul className="pl-4 mt-2">
              <li>Home</li>
              <li>Installation</li>
              <li>API Reference</li>
              <li>Examples</li>
            </ul>
          )}
        </div>

        {/* Components Section */}
        <div>
          <h2 className="text-2xl font-bold cursor-pointer" onClick={() => setShowComponents(!showComponents)}>
            Components
          </h2>
          {showComponents && (
            <div className="pl-4 mt-2">
              <h3 className='font-bold flex items-center'> <span className='text-2xl'><TbClick /></span>Actions</h3>
                <div className='px-8'>
                   <p>Button</p>
                   <p>Dropdown</p>
                   <p>Modal</p>
                   <p>Swap</p>
                   <p>Theme Controlled</p>
                </div>
              <h3>Data display</h3>
              <h3>Navigation</h3>
              <h3>Feedback</h3>
              <h3>Data input</h3>
              <h3>Layout</h3>
              <h3>Mockup</h3>
            </div>
          )}
        </div>

        {/* Theme Section */}
        <div>
          <h2 className="text-2xl font-bold cursor-pointer" onClick={() => setShowTheme(!showTheme)}>
          Theme
          </h2>
          {showTheme && (
            <ul className="pl-4 mt-2">
              <Link to={'/'}><li>Home</li></Link>
              <li>Installation</li>
              <li>API Reference</li>
              <li>Examples</li>
            </ul>
          )}
        </div>

        {/* Support Section */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Support BrightCSS</h3>
          <p className="mt-2">If you find BrightCSS useful, consider supporting us.</p>
        </div>

      </div>
    </div>
  );
};

export default LeftSideBar;
