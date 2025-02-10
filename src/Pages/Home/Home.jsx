import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { RiFunctionLine } from 'react-icons/ri';

const Home = () => {
  return (
    <div className=" text-white min-h-screen">

      <div className='bg-[#4B3947] my-4 p-4  rounded-lg'>
         
         <h3 className='text-2xl font-bold my-2'>Work Progress in 30%</h3>
          
          <div className='h-4 w-[100%] rounded-3xl bg-black flex items-center'>
            <div className='h-4  w-[30%] rounded-full bg-rose-700'></div>
          </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-[#4B3947] p-6 text-center">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to Our React & Next.js Website
        </motion.h1>
        <p className="text-lg">
          This is a React-based website where you can find guides on how to install and create
          React frontend, MongoDB backend, and Next.js projects. You can also explore stylish
          components such as Hero, Footer, Navbar, Button, Icon, Dropdown, Dark Mode, and more.
        </p>
      </div>

      {/* Stylish Components Section */}
      <div className=" bg-[#4B3947] my-4 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          className="bg-white text-black p-4 rounded-lg shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className=" text-xl font-semibold mb-2">Stylish Components</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
               Hero Component
            </li>
            <li className="flex items-center gap-2">
               Footer Component
            </li>
            <li className="flex items-center gap-2">
               Navbar Component
            </li>
            <li className="flex items-center gap-2">
               Button Component
            </li>
            <li className="flex items-center gap-2">
               Icon Component
            </li>
            <li className="flex items-center gap-2">
               Dropdown Component
            </li>
            <li className="flex items-center gap-2">
               Dark Mode
            </li>
          </ul>
        </motion.div>
      </div>

      
      
      
    </div>
  );
};

export default Home;
