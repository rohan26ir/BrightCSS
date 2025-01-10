import React from 'react';
import footer from '../../assets/design/footer.webp'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import logo from '/favicon.png'

const Footer = () => {
  return (
    <div className='bg-[#4B3947] rounded-lg'>
      <div className='flex'>
        <div className='flex-1 p-5'>
          <h2 className='text-4xl font-bold text-lime-100'>Official BrightCSS <br />
          Figma Library</h2>

          <h3 className='mt-2 flex items-center'> 
            <span>
              <img 
              className='h-8 border-2 border-rose-600  bg-white rounded-full'
              src={logo}
              alt="BrightCSS" />
            </span> <span className='ml-1'>Available on daisyUI store</span></h3>
          
          <button className='bg-[#FF865B] flex items-end px-5 py-3 rounded-2xl font-semibold mt-5'>More details <span className='flex items-start ml-1'><HiOutlineArrowNarrowRight /></span></button>
        </div>
        <div className='mr-0 '>
          <img 
          className='h-56'
          src={footer} 
          alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;