import React from "react";
import { Link, NavLink } from "react-router-dom";

function FooterTut() {
  const codeString = String.raw`
//Footer.jsx

import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        {/* Left Section */}
        <div className="p-5 sm:w-2/12 border-r">
          <div className="text-sm uppercase text-indigo-600 font-bold">Menu</div>
          <ul>
            <li className="my-2">
              <NavLink to="/" className="hover:text-indigo-600">
                Home
              </NavLink>
            </li>
            <li className="my-2">
              <NavLink to="/services" className="hover:text-indigo-600">
                Services
              </NavLink>
            </li>
            <li className="my-2">
              <NavLink to="/products" className="hover:text-indigo-600">
                Products
              </NavLink>
            </li>
            <li className="my-2">
              <NavLink to="/pricing" className="hover:text-indigo-600">
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Middle Section */}
        <div className="p-5 sm:w-7/12 border-r text-center">
          <h3 className="font-bold text-xl text-indigo-600 mb-4">Componentity</h3>
          <p className="text-gray-500 text-sm mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Right Section */}
        <div className="p-5 sm:w-3/12">
          <div className="text-sm uppercase text-indigo-600 font-bold">Contact Us</div>
          <ul>
            <li className="my-2">
              <Link to="/contact" className="hover:text-indigo-600">
                XXX XXXX, Floor 4 San Francisco, CA
              </Link>
            </li>
            <li className="my-2">
              <Link to="/contact" className="hover:text-indigo-600">
                contact@company.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <Link to="#" className="w-6 mx-1">Social Icon 1</Link>
          <Link to="#" className="w-6 mx-1">Social Icon 2</Link>
          <Link to="#" className="w-6 mx-1">Social Icon 3</Link>
        </div>
        <div className="my-5">© Copyright 2023. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
`;

  return (
    <div>
      <div className="w-full min-h-screen flex flex-col items-center bg-gray-200">
        <h2 className="text-blue-700 text-5xl font-semibold">Footer</h2>
        <div className="w-full flex flex-row p-15 box-border items-baseline">
          <h3 className="text-3xl underline decoration-2 mr-30">Code</h3>
          <h3 className="text-2xl">
            <a href="#tutorial">Tutorial</a>
          </h3>
        </div>
        <div
          id="codebox"
          className="bg-gray-900 w-[80vw] h-min-[70vh] text-neutral-200 rounded-3xl p-6 flex flex-col overflow-x-scroll"
        >
          <pre className="text-sm">
            <code>{codeString}</code>
          </pre>
        </div>

        <div
          id="tutorial"
          className="mt-20 w-[80%] min-h-screen bg-gray-300 rounded-3xl flex flex-col px-5"
        >
          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 1: Install Dependencies </pre>
          </h2>
          <p>You need react-router-dom for routing:</p>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">bash</span> <br />
            <br />$ npm install react-router-dom
          </div>

          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 2: Set up App.jsx </pre>
          </h2>
          <p>Wrap your app with BrowserRouter to enable routing:</p>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">jsx</span>
            <pre>{`
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* Routes and Footer will go here */}
    </BrowserRouter>
  );
}

export default App;
            `}</pre>
          </div>

          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 3: Create Routes in App.jsx </pre>
          </h2>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">jsx</span>
            <pre>{`
import Home from '../pages/Home';
import Contact from '../pages/Contact';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
            `}</pre>
          </div>

          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 4: Create Footer.jsx </pre>
          </h2>
          <p>Create a file called Footer.jsx in your src/components folder:</p>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">folders</span>
            <pre>{`
src/
└─ components/
   └─ Footer.jsx
            `}</pre>
          </div>

          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 5: Import Dependencies </pre>
          </h2>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">jsx</span>
            <pre>{`
import React from "react";
import { Link, NavLink } from "react-router-dom";
            `}</pre>
          </div>

          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 6: Create Footer Component </pre>
          </h2>
          <p>Design the Footer layout based on your template.</p>

          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 7: Use Link & NavLink </pre>
          </h2>
          <p>
            Use <code>Link</code> for navigation links and <code>NavLink</code>{" "}
            for active route highlighting.
          </p>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">jsx</span>
            <pre>
              <code>{codeString}</code>
            </pre>
          </div>

          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 8: Import Footer in App.jsx </pre>
          </h2>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">jsx</span>
            <pre>{`
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      {/* Other components and Routes */}
      <Footer />
    </BrowserRouter>
  );
}
            `}</pre>
          </div>

          <p className="text-lg py-13">
            And just like that, you've created and implemented a Footer with
            React Router!
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterTut;
