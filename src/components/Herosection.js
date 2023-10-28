import React from "react";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <div className="h-[50rem] w-full bg-slate-100 flex justify-center pt-32 gap-20">
      <div>
        <img
          src="https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"
          alt="error"
          className="h-[30rem] w-[30rem] rounded-full "
        />
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <h1 className="text-9xl font-bold ml-1 font-mono">Hello</h1>
        <p className="ml-2">
          <h1 className="text-xl font-bold">A bit about me</h1>
          I'm a paragraph. Click here to add your own text
          <br />
          and edit me. I’m a great place for you to tell a story
          <br /> and let your users know a little more about you.
        </p>
        <div className="flex gap-10">
          <Link to="/resume">
            <h1 className="hover:bg-orange-500 bg-orange-400 h-36 w-36 rounded-full pt-12 pl-5 text-3xl font-bold shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
              Resume
            </h1>
          </Link>
          <Link to="/projects">
            <h1 className="hover:bg-red-500 bg-red-400 h-36 w-36 rounded-full pt-12 pl-5 text-3xl font-bold shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
              Projects
            </h1>
          </Link>
          <Link to="/aboutus">
            <h1 className="hover:bg-yellow-500 bg-yellow-400 h-36 w-36 rounded-full pt-12 pl-5 text-3xl font-bold shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
              Contact
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
