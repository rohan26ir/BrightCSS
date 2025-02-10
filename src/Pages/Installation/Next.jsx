import React from 'react';
import { FaBackward } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Next = () => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>How to Create a Next.js Project with Tailwind CSS Using npm</h1>
      
      <div className='bg-white p-4 rounded-lg my-4'>
      <h2 className='text-xl font-semibold mb-2'>1. Install Required Packages</h2>
      <p>Follow these steps to create a Next.js project and set up Tailwind CSS:</p>
      
      <pre className='bg-gray-800 text-white p-4 rounded'>
{`npx create-next-app@latest my-next-app
cd my-next-app
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
      </pre>
      </div>
      
      <div className='bg-white p-4 rounded-lg my-4'>
      <h2 className='text-xl font-semibold mb-2'>2. Configure Tailwind CSS</h2>
      <p>Once the packages are installed, you need to configure Tailwind CSS by modifying some files:</p>
      <ul className='list-disc ml-6'>
        <li>Open the <code>tailwind.config.js</code> file and update the content to look like this:</li>
      </ul>
      
      <pre className='bg-gray-800 text-white p-4 rounded'>
{`module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
      </pre>
      </div>

      <div className='bg-white p-4 rounded-lg my-4'> 
      <h2 className='text-xl font-semibold mb-2'>3. Add Tailwind Directives</h2>
      <p>In your <code>globals.css</code> file (located inside the <code>styles</code> folder), add the following Tailwind CSS directives:</p>

      <pre className='bg-gray-800 text-white p-4 rounded'>
{`@tailwind base;
@tailwind components;
@tailwind utilities;`}
      </pre>
      </div>

      <div className='bg-white p-4 rounded-lg my-4'>
      <h2 className='text-xl font-semibold mb-2'>4. Start the Project</h2>
      <p>To start your Next.js project with Tailwind CSS, run:</p>
      <pre className='bg-gray-800 text-white p-4 rounded'>
        npm run dev
      </pre>
      </div>

       <div className='bg-white p-4 rounded-lg my-2'>
       <p>Your Next.js project with Tailwind CSS is now set up and running!</p>
       </div>

       <div className='flex justify-between'>
        <div></div>
        <div className='cursor-pointer'>
          <Link to={'/installation'}>
          <p className='bg-orange-500 px-4 py-2 rounded-lg flex items-center gap-2'><FaBackward /> Go back</p>
          </Link>
        </div>
       </div>

    </div>
  );
};

export default Next;
