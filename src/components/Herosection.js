import React from "react";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <div className="h-[50rem] w-full bg-slate-100 flex justify-center pt-32 gap-40">
      <div>
        <img
          src="myimage.jpg"
          alt="error"
          className="h-[30rem] w-[30rem] rounded-full object-cover fill-black "
        />
      </div>
      <div className="flex flex-col gap-10 mt-[-20px]">
        <h1 className="text-9xl font-bold ml-1 font-mono">Hello</h1>
        <p className="ml-2">
          <h1 className="text-xl font-bold">
            A bit about me <br />
          </h1>
          As an ardent front-end developer, I embody the essence of dedication,
          <br />
          tirelessly crafting elegant web interfaces. My unwavering commitment
          <br />
          and strong work ethic fuel my insatiable love for coding. Each day, I
          <br />
          strive to push my boundaries, staying intrinsically self-motivated,
          <br />
          and fostering a relentless pursuit of excellence
        </p>
        <div className="flex gap-10">
          <Link to="/resume">
            <h1 className="herocolor hover:bg-orange-500 bg-orange-600 h-36 w-36 rounded-full pt-12 pl-5 text-3xl font-bold border border-black">
              Resume
            </h1>
          </Link>
          <Link to="/projects">
            <h1 className="herocolor hover:bg-red-500 bg-red-600 h-36 w-36 rounded-full pt-12 pl-5 text-3xl font-bold border border-black">
              Projects
            </h1>
          </Link>
          <Link to="/aboutus">
            <h1 className="herocolor hover:bg-yellow-500 bg-yellow-600 h-36 w-36 rounded-full pt-12 pl-5 text-3xl font-bold border border-black">
              Contact
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
