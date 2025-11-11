// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-200">
      <NavLink
        to="/"
        
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "text-gray-700"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/docs"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "text-gray-700"
        }
      >
        Docs
      </NavLink>
      <NavLink
        to="/components"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "text-gray-700"
        }
      >
        Components
      </NavLink>
    </nav>
  );
}
