import React from "react";

const ProjectCreate = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          How to Create a React Project Using npm
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Follow this roadmap to quickly set up and start a React project using
          npm.
        </p>
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-gray-50 border-l-4 border-blue-500 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Step 1: Install React Router
            </h2>
            <p className="text-gray-600">
              Install React Router from the official website{" "}
              <a
                href="https://reactrouter.com/6.28.0/start/tutorial"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              . npm comes bundled with React Router.
            </p>
            <div>
              <pre className="bg-gray-800 my-2 text-white rounded p-3 overflow-x-auto">
                <code>
                  npm create vite@latest{" "}
                  <span className="text-yellow-500">name-of-your-project</span>{" "}
                  -- --template react
                </code>
              </pre>
              <p>
                &gt;cd{" "}
                <span className="text-orange-600">name-of-your-project</span>
              </p>
              <pre className="bg-gray-800 my-2 text-white rounded p-3 overflow-x-auto">
                <code>npm install react-router-dom</code>
              </pre>
              <p>Always need this!</p>
              <pre className="bg-gray-800 my-2 text-white rounded p-3 overflow-x-auto">
                <code>npm install localforage match-sorter sort-by</code>
              </pre>
              <p>Only for this tutorial.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-center">
                React Router Setup
              </h2>
            </div>

            <div>
              <p className="font-bold">main.jsx</p>
              <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto">
                <code>
                  {`import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Router from './Router/Router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
`}
                </code>
              </pre>
            </div>

            <div>
              <p className="my-1">
                In <span className="font-bold">src</span> create{" "}
                <span className="font-bold">Router.jsx</span>
              </p>
              <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto">
                <code>
                  {`import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

export default Router;
`}
                </code>
              </pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-50 border-l-4 border-green-500 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Step 2: Open Your vs code
            </h2>
            <p className="text-gray-600">
              Run the following command in your terminal:
            </p>
            <pre className="bg-gray-800 my-1 text-white rounded p-3 overflow-x-auto">
              <code>code .</code>
            </pre>
            <p className="text-gray-600">Open VS Code</p>
            <pre className="bg-gray-800 my-1 text-white rounded p-3 overflow-x-auto">
              <code>npm run dev</code>
            </pre>
            <p className="text-gray-600">
              This will open your project in the browser at{" "}
              <a target="_blank" href="http://localhost:5173">
                http://localhost:5173
              </a>
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Step 3: Install Tailwind
            </h2>
            <p className="text-gray-600">
              Run the following command in your terminal:
            </p>
            <pre className="bg-gray-800 my-1 text-white rounded p-3 overflow-x-auto">
              <code>npm install -D tailwindcss postcss autoprefixer</code>
            </pre>
            <pre className="bg-gray-800 my-1 text-white rounded p-3 overflow-x-auto">
              <code>npx tailwindcss init -p</code>
            </pre>

            <div>
              <p>
                Change full code in <span>tailwind.config.js</span>
              </p>
              <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto">
                <code>
                  {`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


`}
                </code>
              </pre>
            </div>
            <div>
              <p>
                Change full code in <span>index.css</span>
              </p>
              <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto">
                <code>
                  {`@tailwind base;
@tailwind components;
@tailwind utilities;
`}
                </code>
              </pre>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-gray-50 border-l-4 border-red-500 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Step 4: Start the Development Server
            </h2>
            <p className="text-gray-600">Install daisyUI as a Node package:</p>
            <pre className="bg-gray-800 text-white rounded p-3 overflow-x-auto">
              <code>npm i -D daisyui@latest</code>
            </pre>

            <div>
              <p>
                Change full code in <span>tailwind.config.js:</span>
              </p>
              <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto">
                <code>
                  {`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}


`}
                </code>
              </pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-50 border-l-4 border-purple-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Step 5: add in eslint.config.js
            </h2>
            <p>
              Pest after :
              <pre>
                <code>{`languageOptions: {
      ecmaVersion: 2020,`}</code>
              </pre>
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto">
              <code>node: true,</code>
            </pre>
          </div>
        </div>

        <div className="bg-gray-50 border-l-4 border-rose-700 rounded-lg p-4 mt-8">
          <h2 className="text-xl text-center font-bold pb-2 text-rose-600">
            Copy paste and Install
          </h2>

          <p className="text-gray-700">
            Run the following command in your terminal:
          </p>
          <pre className="bg-gray-900 text-white p-4 rounded overflow-x-auto">
            <code>
              <span className="text-[#F44250]">
              npm create vite@latest name-of-your-project -- --template react{" "}
              <br />
              npm install react-router-dom <br />
              npm install localforage match-sorter sort-by <br />
              </span>
              <span className="text-[#38BDF8]">
              npm install -D tailwindcss postcss autoprefixer <br />
              npx tailwindcss init -p <br />
              </span>
              <span className="text-[#1AD1A5]">
              npm i -D daisyui@latest <br />
              </span>
            </code>
          </pre>

          <div className="ml-2 mt-2">
            <ol class="list-decimal list-inside">
              <li>React + React Route<sup className="text-rose-600">v6.28.0</sup> (1-3)</li>
              <li>Tailwind CSS  (4-5)</li>
              <li>DaisyUI  (last)</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCreate;
