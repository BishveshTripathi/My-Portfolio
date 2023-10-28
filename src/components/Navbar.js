import React, { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);

  const handleMode = () => {
    setDark(!dark);
  };
  return (
    <div className="">
      <div className="h-16 w-full bg-slate-100 flex justify-between pt-5">
        <div>
          <Link to="/">
            <div className="flex">
              <h1 className="mt-5 ml-6">🔻</h1>
              <div className="flex gap-2">
                <h1 className="pt-4  font-bold text-xl">Bishvesh Tripathi</h1>
                <h6 className="pt-5">Front-End Developer</h6>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <ul className="flex gap-2 pt-4 pr-6 text-l">
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <span>|</span>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <span>|</span>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <span>|</span>
            <li>
              <button onClick={handleMode}>
                {dark ? (
                  <span class="material-symbols-outlined">light_mode</span>
                ) : (
                  <span class="material-symbols-outlined">dark_mode</span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
