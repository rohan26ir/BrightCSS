import React from 'react';
import { LuGithub } from 'react-icons/lu';
import { TfiUser } from 'react-icons/tfi';
import { TiSocialYoutube } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-gray-800 text-white '>
      <div className='flex justify-between items-center px-5 py-2'>
        {/* 1st */}
        <div>
          <Link><h1>BrightCSS</h1></Link>
        </div>
        {/* 2nd */}
        <div>
          <h2><span className='font-bold'>Try BrightCSS</span> <span className='text-[10px] font-thin'>NEW</span> </h2>
        </div>
        {/* 3rd */}
        <div className='flex justify-center items-center'>
          <div>
          <LuGithub />
          </div>
          <div>
          <TfiUser />
          </div>
          <div>
          <TiSocialYoutube />
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default Navbar;