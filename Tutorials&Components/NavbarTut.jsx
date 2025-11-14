import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComponents } from "../src/store/componentSlice";

function NavbarTut() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.components);

  useEffect(() => {
    if (status === "idle") dispatch(fetchComponents());
  }, [status, dispatch]);

  const component = items.find((c) => c.id === 1);

  function saveComponent() {
    if (!component) return;
    const saved = JSON.parse(localStorage.getItem("savedComponents")) || [];
    const exists = saved.find((c) => c.id === component.id);
    if (exists) return console.log("Already saved");

    saved.push(component);
    localStorage.setItem("savedComponents", JSON.stringify(saved));
    console.log("✅ Saved:", component.name);
  }

  function unsaveComponent() {
    if (!component) return;
    const saved = JSON.parse(localStorage.getItem("savedComponents")) || [];
    const updated = saved.filter((c) => c.id !== component.id);
    localStorage.setItem("savedComponents", JSON.stringify(updated));
    console.log("❌ Unsave:", component.name);
  }

  const codeString = String.raw`
//Navbar.jsx

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Company", "Marketplace", "Features", "Team", "Contact"];

  return (
    <nav className="bg-white border-gray-200 py-2.5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-900">
            Company Logo
          </span>
        </Link>

        {/* Right side */}
        <div className="flex items-center lg:order-2">
          <Link
            to="/download"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
          >
            Download
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 ml-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className={\`w-6 h-6 \\\${isOpen ? "hidden" : "block"}\`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              className={\`w-6 h-6 \\\${isOpen ? "block" : "hidden"}\`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div
          className={\`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 \\\${isOpen ? "block" : "hidden"}\`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={\`/\${item.toLowerCase()}\`}
                  className={({ isActive }) =>
                    "block py-2 pl-3 pr-4 rounded " + (isActive
                      ? "text-white bg-blue-700 lg:bg-transparent lg:text-blue-700"
                      : "text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-blue-700") + " lg:p-0"
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
`;

  if (status === "loading" || !component) {
    return <p className="text-center mt-20 text-xl">Loading...</p>;
  }

  return (
    <div>
      <div className="w-full min-h-screen flex flex-col items-center bg-gray-200">
        <div className="w-[50%] flex flex-row justify-around my-5">
          <h2 className="text-blue-700 text-5xl font-semibold">Navbar</h2>
          <div className="flex gap-2">
            <button
              onClick={saveComponent}
              className="bg-blue-800 text-white p-3 rounded hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={unsaveComponent}
              className="bg-red-700 text-white p-3 rounded hover:bg-red-500"
            >
              Unsave
            </button>
          </div>
        </div>

        <img src="../assets/canvas.min.webp" alt="" className="object-cover" />

        {/* Existing tutorial content untouched */}
        <div className="w-full flex flex-row p-15 box-border items-baseline">
          <h3 className="text-3xl underline decoration-2 mr-30">Code</h3>
          <h3 className="text-2xl">
            <a href="#tutorial">Tutorial</a>
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
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
            <br />
            $npm install react-router-dom
          </div>

          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 2: Set up your App.jsx file </pre>
          </h2>
          <p>
            Import Browser Router and wrap everything in App.jsx in the Router
          </p>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">jsx</span> <br />
            <br />
            <pre>{`
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    
    </BrowserRouter>
    </>
  )
}

export default App`}</pre>
          </div>
          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 3:Create Routes in App.jsx</pre>
          </h2>
          {/* <p>You need react-router-dom for routing:</p> */}
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">jsx</span> <br />
            <br />
            <pre>{`
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
`}</pre>
          </div>

          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans">
              {" "}
              Step 4: Create the Navbar Component File
            </pre>
          </h2>
          <p>Create a file called Navbar.jsx in your src folder:</p>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">folders</span> <br />
            <br />
            <pre>
              {`src/
    └─ Navbar.jsx`}
            </pre>
          </div>
          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans"> Step 5: Import Dependencies </pre>
          </h2>
          <p>
            At the top of Navbar.jsx, import React, useState, and React Router
            components:
          </p>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">jsx</span> <br />
            <br />
            <pre>{`
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
            `}</pre>
          </div>
          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans">
              {" "}
              Step 6: Create and Customise the navbar component{" "}
            </pre>
          </h2>
          <p>
            Design A Navbar component based on the given template and customise
            it to your particular needs
          </p>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3 overflow-x-scroll">
            <span className="text-xs">jsx</span> <br />
            <br />
            <pre>
              {`
                import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "Company", "Marketplace", "Features", "Team", "Contact"];

  return (
    <nav className="bg-white border-gray-200 py-2.5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-900">
            Company Logo
          </span>
        </div>

        {/* Right side: Download button + Mobile menu button */}
        <div className="flex items-center lg:order-2">
          <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0">
            Download
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 ml-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            {/* Hamburger icon */}
            <svg className={\`w-6 h-6 \${isOpen ? "hidden" : "block"}\`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 5h14M3 10h14M3 15h14" clipRule="evenodd" />
            </svg>
            {/* Close icon */}
            <svg className={\`w-6 h-6 \${isOpen ? "block" : "hidden"}\`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293l11.414 11.414M4.293 15.707L15.707 4.293" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div className={\`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 \${isOpen ? "block" : "hidden"}\`}>
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            {navItems.map((item, index) => (
              <li key={index}>
                <span className="block py-2 pl-3 pr-4 rounded text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0">
                  {item}
                </span>
              </li>
            ))}

                `}
            </pre>
          </div>
          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans">
              {" "}
              Step 7: Add Navigation with Link and NavLink{" "}
            </pre>
          </h2>
          <p>
            Link allows the user to navigate to different Routes and NavLink has
            the same feature but has the extra feature of being able to tell
            when the link is active
          </p>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">jsx</span> <br />
            <br />
            <pre className="">
              <code>{codeString}</code>
            </pre>
          </div>
          <h2 className="text-2xl font-semibold py-5 underline decoration-3">
            <pre className="font-sans">
              {" "}
              Step 8: Import Navbar in App.jsx so It's consistent among routes
            </pre>
          </h2>
          <div className="m-2 bg-gray-900 text-white rounded-2xl px-5 pt-2 pb-3">
            <span className="text-xs">jsx</span> <br />
            <br />
            <pre className="">
              {`import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* Other components and Routes */}
    </div>
  );
}`}
            </pre>
          </div>

          <p className="text-lg py-13">
            And Just like that you've been able to make and implement a Navbar
            with React Router!
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavbarTut;
