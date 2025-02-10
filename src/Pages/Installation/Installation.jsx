import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// image for icon
import react from '../../assets/skills/React.svg';

import mongodb from '../../assets/skills/MongoDB.svg';

import nextjs from '../../assets/skills/nextjs.svg';

const Installation = () => {
  const cards = [
    {
      title: 'React Frontend',
      image: react,
      info: ['Fast development', 'Component-based', 'Virtual DOM'],
      link: '/installation/ReactJs'
    },
    {
      title: 'React Backend',
      image: mongodb,
      info: ['Node.js', 'Express.js', 'API integration'],
      link: '/installation/Backend'
    },
    {
      title: 'Next.js',
      image: nextjs,
      info: ['Server-side rendering', 'SEO-friendly', 'Hybrid static & dynamic'],
      link: '/installation/Next'
    }
  ];

  return (
    <div className=' p-4'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {cards.map((card, index) => (
          <motion.div 
            key={index} 
            className='bg-white bg-opacity-80 rounded-lg h-96 p-4 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300'
            whileHover={{ scale: 1.05 }}
          >
            <h2 className='text-xl text-center font-bold mb-5'>{card.title}</h2>
            <div>
              <img
              className='h-20  mb-3' 
              src={card.image} 
              alt="" />
            </div>
            <ul className='text-gray-700 space-y-1 flex-1'>
              {card.info.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
            <Link to={card.link} className='bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition duration-300'>
              npm Install
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
