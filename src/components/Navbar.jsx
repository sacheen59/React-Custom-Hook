import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const anchorClasses =
    "uppercase font-semibold text-red-400 hover:text-red-600 font-poppins";

  const activeClasses =
    "text-red-600 border-b-2 border-red-700 uppercase font-semibold font-poppins";
  return (
    <div className="h-[100px] flex items-center justify-between">
      <div className="font-poppins bg-red-400 p-2 rounded text-white text-xl uppercase font-semibold">
        Json placeholder
      </div>
      <nav>
        <ul className="flex gap-[2rem]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClasses : anchorClasses
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive ? activeClasses : anchorClasses
              }
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todos"
              className={({ isActive }) =>
                isActive ? activeClasses : anchorClasses
              }
            >
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/albums"
              className={({ isActive }) =>
                isActive ? activeClasses : anchorClasses
              }
            >
              Albums
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/photos"
              className={({ isActive }) =>
                isActive ? activeClasses : anchorClasses
              }
            >
              Photos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/comments"
              className={({ isActive }) =>
                isActive ? activeClasses : anchorClasses
              }
            >
              comments
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
