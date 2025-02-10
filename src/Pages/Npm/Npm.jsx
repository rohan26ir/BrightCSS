import React from 'react';

const Npm = () => {
  const packages = [
    { id: 1, name: 'react', description: 'A JavaScript library for building user interfaces.', install: 'npm i react' },
    { id: 2, name: 'react-dom', description: 'Provides DOM-specific methods for React.', install: 'npm i react-dom' },
    { id: 3, name: 'react-router-dom', description: 'Declarative routing for React web applications.', install: 'npm i react-router-dom' },
    { id: 4, name: 'axios', description: 'Promise-based HTTP client for making API requests.', install: 'npm i axios' },
    { id: 5, name: 'lodash', description: 'A utility library for working with arrays, objects, and functions.', install: 'npm i lodash' },
    { id: 6, name: 'moment', description: 'A library for parsing, validating, manipulating, and formatting dates.', install: 'npm i moment' },
    { id: 7, name: 'dayjs', description: 'A lightweight alternative to Moment.js for date/time manipulation.', install: 'npm i dayjs' },
    { id: 8, name: 'redux', description: 'A state management library for JavaScript apps.', install: 'npm i redux' },
    { id: 9, name: 'react-redux', description: 'Official React bindings for Redux.', install: 'npm i react-redux' },
    { id: 10, name: 'redux-thunk', description: 'Middleware to handle async actions in Redux.', install: 'npm i redux-thunk' },
  ];
  
  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='text-2xl font-bold my-4'>NPM Packages List</h1>
      <div className='overflow-x-auto'>
        <table className='w-full border-collapse border border-gray-300'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='border border-gray-300 px-4 py-2'>S/N</th>
              <th className='border border-gray-300 px-4 py-2'>Package Name</th>
              <th className='border border-gray-300 px-4 py-2'>Description</th>
              <th className='border border-gray-300 px-4 py-2'>Installation</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg, index) => (
              <tr key={index} className='bg-gray-500 hover:bg-gray-100'>
                <td className='border border-gray-300 px-4 py-2'>{pkg.id}</td>
                <td className='border border-gray-300 px-4 py-2'>{pkg.name}</td>
                <td className='border border-gray-300 px-4 py-2'>{pkg.description}</td>
                <td className='border border-gray-300 px-4 py-2'><code>{pkg.install}</code></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Npm;
