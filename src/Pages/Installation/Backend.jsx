import React from "react";
import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

const Backend = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl text-center text-black font-bold mb-4">
        Setting Up a Backend with MongoDB, Express, and Node.js
      </h1>

       {/* 1st steps */}
      <div className="bg-white p-4 rounded-lg my-4">
      <h2 className="text-xl font-semibold">1. Install Required Packages</h2>
      <p>
        To start, you need to install the required npm packages. Run the
        following command:
      </p>

      <pre className="bg-gray-800 text-white p-4 rounded">
        npm init -y npm install express mongoose cors dotenv npm install
        --save-dev nodemon
      </pre>
      </div>

      {/* 2nd steps */}
      <div className="bg-white p-4 rounded-lg my-4">
      <h2 className="text-xl font-semibold">2. Project Configuration</h2>
      <p>Follow these steps to configure your backend project:</p>
      <ul className="list-disc ml-6">
        <li>
          Create a file named <code>.env</code> to store environment variables.
        </li>
        <li>
          Set up an <code>index.js</code> file for your server logic.
        </li>
        <li>Use Express to create API routes.</li>
        <li>Connect to MongoDB using Mongoose.</li>
      </ul>
      </div>
      
      {/* 3rs steps */}
      <div className="bg-white p-4 rounded-lg my-4">
      <h2 className="text-xl font-semibold">3. Sample Express Server</h2>
      <pre className="bg-gray-800 text-white p-4 rounded">
        {`const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Backend is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
`}
      </pre>
      </div>

      <div className="bg-white p-4 rounded-lg my-4">
      <h2 className="text-xl font-semibold">4. Running the Server</h2>
      <p>To start the server, use:</p>
      <pre className="bg-gray-800 text-white p-4 rounded">nodemon index.js</pre>
      </div>

      <div className="bg-white p-4 rounded-md my-2">
      <p>Your backend should now be running successfully!</p>
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

export default Backend;
