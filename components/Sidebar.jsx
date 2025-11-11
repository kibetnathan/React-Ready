import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative h-[100vh]">
      {/* Mobile toggle button */}
      <button
        className="md:hidden p-2 bg-blue-700 text-white rounded fixed top-15 left-4 z-50"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <aside
        className={`absolute top-0 left-0 w-64 bg-blue-800 text-white h-full md:h-full transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:block z-10`}
      >
        <div className="py-3 text-2xl uppercase text-center tracking-widest bg-blue-900 border-b-2 border-blue-700 mb-8">
          <Link to="/" className="text-white">
            React Ready
          </Link>
        </div>

        <nav className="text-sm">
          <ul className="flex flex-col">
            <li className="px-4 cursor-pointer bg-blue-600 text-white hover:bg-blue-700 hover:text-white">
              <Link className="py-3 flex items-center" to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18"
                  />
                </svg>
                Introduction
              </Link>
            </li>

            <li className="px-4 py-2 text-xs uppercase tracking-wider text-blue-300 font-bold">
              How To Use
            </li>
            <li className="px-4 cursor-pointer hover:bg-blue-700">
              <Link className="py-3 flex items-center" to="/users">
                Account Set Up
              </Link>
            </li>
            <li className="px-4 cursor-pointer hover:bg-blue-700">
              <Link className="py-3 flex items-center" to="/roles">
                Tools
              </Link>
            </li>

            <li className="px-4 py-2 text-xs uppercase tracking-wider text-blue-300 font-bold">
              Components
            </li>
            <li className="px-4 cursor-pointer hover:bg-blue-700">
              <Link className="py-3 flex items-center" to="/categories">
                Tutorials
              </Link>
            </li>
            <li className="px-4 cursor-pointer hover:bg-blue-700">
              <Link className="py-3 flex items-center" to="/products">
                Saving Components
              </Link>
            </li>

            <li className="px-4 py-2 text-xs uppercase tracking-wider text-blue-300 font-bold">
              Libraries
            </li>
            <li className="px-4 cursor-pointer hover:bg-blue-700">
              <Link className="py-3 flex items-center" to="/orders">
                Redux
              </Link>
            </li>
            <li className="px-4 cursor-pointer hover:bg-blue-700">
              <Link className="py-3 flex items-center" to="/payments">
                Router
              </Link>
            </li>

            <li className="px-4 py-2 text-xs uppercase tracking-wider text-blue-300 font-bold">
              Questionss
            </li>
            <li className="px-4 cursor-pointer hover:bg-blue-700">
              <Link className="py-3 flex items-center" to="/reports">
                FAQs
              </Link>
            </li>
            <li className="px-4 cursor-pointer hover:bg-blue-700">
              <Link className="py-3 flex items-center" to="/reports">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </section>
  );
}
