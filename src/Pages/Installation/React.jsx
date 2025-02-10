import React from "react";
import { motion } from "framer-motion";
import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReactJS = () => {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Setting Up a React Frontend Project</h1>
      
      {/* Step 1: Creating a React Project with Vite */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Create React Project using Vite</h2>
        <p>To set up a new React project using Vite, run the following command:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md mt-2 overflow-x-auto">
          npx create-vite@latest my-app --template react
          cd my-app
          npm install
          npm run dev
        </pre>
      </div>

      {/* Step 2: Installing React Router and Tailwind CSS */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Install Dependencies</h2>
        <p>Install React Router for navigation and Tailwind CSS for styling:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md mt-2 overflow-x-auto">
{`npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
        </pre>
      </div>

      {/* Step 3: Configuring Tailwind CSS */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Configure Tailwind CSS</h2>
        <p>Modify the <code>tailwind.config.js</code> file to include:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md mt-2 overflow-x-auto">
{`module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};`}
        </pre>
        <p className="mt-4">Add Tailwind directives in <code>index.css</code>:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md mt-2 overflow-x-auto">
{`@tailwind base;
@tailwind components;
@tailwind utilities;`}
        </pre>
      </div>

      {/* Step 4: Setting Up React Router */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Set Up React Router</h2>
        <p>Create a <code>Router.js</code> file inside <code>src</code> and define routes:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md mt-2 overflow-x-auto">
{`import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;`}
        </pre>
      </div>

      {/* Step 5: Running the Project */}
      <div className="bg-gray-100 p-6 my-2 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">5. Run Your Project</h2>
        <p>Start the development server with:</p>
        <pre className="bg-gray-800 text-white p-4 rounded-md mt-2 overflow-x-auto">
          npm run dev
        </pre>
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

export default ReactJS;
