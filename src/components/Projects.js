import React from "react";

/* ---------------------------------------reactProjects----------------------------------------- */

const Projects = ({ reactprojects, jsprojects }) => (
  <div className="bg-slate-100 pl-8">
    <h1 className=" text-xl pl-[45px] font-bold pt-10">React Projects</h1>
    <div className="flex flex-wrap pb-10 gap-10 mt-6 ml-12 ">
      {reactprojects?.map((project) => (
        <div
          key={project.id}
          className=" rounded h-[22rem]  w-80 pl-4 pt-4 bg-slate-100 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        >
          <img
            src={project.image}
            alt={project.name}
            className="h-52 w-72  rounded-xl"
          />
          <div className="flex justify-between ">
            <div className="mt-5">
              <h3 className="text-lg font-bold">{project.name}</h3>
              <p>{project.description} </p>
            </div>
          </div>
          <div className="flex gap-20 mt-2">
            <button className="bg-sky-600 hover:bg-sky-700 px-6 rounded-lg text-white">
              <a href={project.source}>Source</a>
            </button>
            <button
              href={project.source}
              className="bg-sky-600 hover:bg-sky-700 px-6 py-1 rounded-lg text-white"
            >
              <a href={project.source}>Open</a>
            </button>
          </div>
        </div>
      ))}
    </div>
    <hr />

    {/* ---------------------------------------jsProjects------------------------------------------ */}

    <h1 className="text-xl pl-[45px] font-bold pt-10">Javascript Projects</h1>
    <div className="flex flex-wrap pb-10 gap-10 mt-10 ml-12 ">
      {jsprojects?.map((project) => (
        <div
          key={project.id}
          className=" rounded h-[22rem] w-80 pl-4 pt-4 bg-slate-100 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        >
          <img
            src={project.image}
            alt={project.name}
            className="h-52 w-72  rounded-xl"
          />
          <div className="flex justify-between ">
            <div className="mt-5">
              <h3 className="text-lg font-bold">{project.name}</h3>
              <p>{project.description} </p>
            </div>
          </div>
          <div className="flex gap-20 pt-2">
            <button className="bg-sky-600 px-6 rounded-lg hover:bg-sky-700  text-white">
              <a href={project.source}>Source</a>
            </button>
            <button className="bg-sky-600 px-6 py-1 hover:bg-sky-700 rounded-lg text-white">
              <a href={project.source}>Open</a>
            </button>
          </div>
        </div>
      ))}
    </div>
    <hr />
  </div>
);

export default Projects;
