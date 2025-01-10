import React from 'react';
import { LuGithub } from 'react-icons/lu';
import { TbCampfireFilled } from 'react-icons/tb';
import { TfiUser } from 'react-icons/tfi';
import { TiSocialYoutube } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import logo from '/favicon.png'

const Navbar = () => {
  return (
    <div className='bg-[#121C22] text-white'>
      <div className='flex justify-between items-center px-5 py-2'>
        {/* 1st */}
        <div>
          <Link><h1 className='flex items-center gap-1'><span>
          <img 
              className='h-6 border-2 border-rose-600  bg-white rounded-full'
              src={logo}
              alt="" />
            </span><span className='text-rose-600 font-bold text-2xl'>BrightCSS</span></h1></Link>
        </div>
        {/* 2nd */}
        <div>
          <h2><span className='font-bold'>Try BrightCSS</span> <span className='text-[10px] font-thin'>NEW</span> </h2>
        </div>
        {/* 3rd */}
        <div className='flex justify-center items-center text-xl gap-2 w-[10%]'>
          <div className='border-2 border-rose-700 p-2 border-dashed rounded-full '>
          <LuGithub />
          </div>
          <div className='border-2 border-rose-700 p-2 border-dashed rounded-full '>
          <TfiUser />
          </div>
          <div className='border-2 p-2 border-rose-700 border-dashed rounded-full '>
          <TiSocialYoutube />
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default Navbar;