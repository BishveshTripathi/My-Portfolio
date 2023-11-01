import React, { useState } from "react";

const Projects = ({ reactprojects, jsprojects }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // -----------------react next & orev slide---------------------

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % reactprojects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + reactprojects.length) % reactprojects.length
    );
  };

  // -----------------js next & prev slide-------------------------

  const nextSlidejs = () => {
    setCurrentSlide((currentSlide + 1) % jsprojects.length);
  };

  const prevSlidejs = () => {
    setCurrentSlide((currentSlide - 1 + jsprojects.length) % jsprojects.length);
  };

  // -----------------Automatic slider in 3s------------------------

  // useEffect(() => {
  //   const slideInterval = setInterval(nextSlide, 3000);
  //   return () => {
  //     clearInterval(slideInterval);
  //   };
  // }, [currentSlide]);

  return (
    <div className="bg-slate-100 pl-8">
      <div className="flex gap-2">
        <h1 className="text-xl pl-[45px] font-bold pt-10">React Projects</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
          alt="errror"
          className="h-6 w-7 mt-[42px] "
        />
      </div>
      <div className="flex gap-10 pt-11 pb-32">
        <div>
          <button
            className="bg-slate-700 px-1 py-2 mt-40 pt-3 pl-4 pr-2 rounded-full"
            onClick={prevSlide}
          >
            <div className="arrow ">
              <span class="material-symbols-outlined">arrow_back_ios</span>
            </div>
          </button>
        </div>
        <div className="h-[300px] w-full">
          {reactprojects.map((project, index) => (
            <div
              key={project.id}
              className={`carousel-slide  ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <div className="flex gap-20">
                <div>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="imgshadow rounded-lg w-[40rem] h-80 object-fill shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                  />
                </div>
                <div className="flex flex-col gap-12">
                  <h3 className="text-6xl font-extralight">{project.name}</h3>
                  <p className="text-lg w-96">{project.description}</p>
                  <div className="flex gap-10 ">
                    <button className="btns bg-sky-800 hover:bg-sky-900 px-4 py-2 rounded-lg">
                      <a href={project.source}>Source</a>
                    </button>
                    <button className="btns bg-sky-800 hover:bg-sky-900 px-4 py-2 rounded-lg">
                      <a href={project.link}>Demo</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button
            className="bg-slate-700  px-1 py-2 mt-40 pt-3 pl-4 pr-2 mr-10 rounded-full"
            onClick={nextSlide}
          >
            <div className="arrow">
              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </div>
          </button>
        </div>
      </div>
      <hr />

      {/* ----------------------------------------javascript------------------------------------------- */}

      <div className="flex">
        <h1 className="text-xl pl-[45px] font-bold pt-10">
          Javascript Projects
        </h1>
        <img
          src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
          alt="errror"
          className="h-9 w-14 mt-[37px]"
        />
      </div>
      <div className="flex gap-10 pt-11 pb-20">
        <div>
          <button
            className="bg-slate-700  px-1 py-2 mt-40 pt-3 pl-4 pr-2 rounded-full"
            onClick={prevSlidejs}
          >
            <div className="arrow ">
              <span class="material-symbols-outlined">arrow_back_ios</span>
            </div>
          </button>
        </div>
        <div className="h-[300px] w-full">
          {jsprojects.map((project, index) => (
            <div
              key={project.id}
              className={`carousel-slide  ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <div className="flex gap-20">
                <div>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="imgshadow rounded-lg w-[40rem] h-80 object-fill shadow-[rgba(0,0,0,0.3)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
                  />
                </div>
                <div className="flex flex-col gap-12">
                  <h3 className="text-6xl font-extralight">{project.name}</h3>
                  <p className="text-lg w-96">{project.description}</p>
                  <div className="flex gap-10 ">
                    <button className="btns bg-sky-800 hover:bg-sky-900 px-4 py-2 rounded-lg">
                      <a href={project.source}>Source</a>
                    </button>
                    <button className="btns bg-sky-800 hover:bg-sky-900 px-4 py-2 rounded-lg">
                      <a href={project.link}>Demo</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button
            className="bg-slate-700  px-1 py-2 mt-40 pt-3 pl-4 pr-2 mr-10 rounded-full"
            onClick={nextSlidejs}
          >
            <div className="arrow">
              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </div>
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Projects;
