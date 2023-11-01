import React from "react";

const Resume = () => {
  return (
    <div className=" w-full bg-slate-100">
      <div className="flex gap-2">
        <h1 className="text-4xl font-bold pt-10 pl-20 pb-10">Resume</h1>
        <a className="pt-[53px]" href="/BishveshTripathi@2000.pdf">
          <span class="material-symbols-outlined">download</span>
        </a>
      </div>
      <hr />
      {/* ---------------------------Education----------------------------- */}
      <div className="flex gap-[44rem] pt-20 pl-52 text-xl pb-20">
        <h1 className="font-bold text-3xl">Education</h1>
        <div className="flex flex-col gap-16">
          <span className="flex gap-10">
            <p className="text-lg">2020-23</p>
            <div>
              <h1 className="font-bold">Bachelor's</h1>
              <p>
                I have successfully completed my
                <br />
                Bachelor in Computer Science & Eng.
              </p>
            </div>
          </span>
          <span className="flex gap-10">
            <p className="text-lg">2018-20</p>
            <div>
              <h1 className="font-bold">Diploma</h1>
              <p>
                I have successfully completed my
                <br />
                Diploma in Computer Science
              </p>
            </div>
          </span>
          <span className="flex gap-10">
            <p className="text-lg">2014-15</p>
            <div>
              <h1 className="font-bold">High-school</h1>
              <p>
                I have successfully completed my
                <br />
                High-school with 78%.
              </p>
            </div>
          </span>
        </div>
      </div>
      {/* ------------------------Skills------------------------------- */}
      <hr />
      <div className="flex gap-[41rem] pt-20 pl-52 text-xl pb-20">
        <h1 className="font-bold text-3xl">Skills & Expertise</h1>
        <div>
          <ul className="flex flex-wrap gap-10">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React JS</li>
            <li>TailWind CSS</li>
            <li>My SQL</li>
            <li>Git & Github</li>
          </ul>
        </div>
      </div>
      {/* --------------------Interests-------------------------------------- */}
      <hr />
      <div className="flex gap-[44rem] pt-20 pl-52 text-xl pb-20">
        <h1 className="font-bold text-3xl">Interests</h1>
        <div>
          <ul className="flex flex-wrap gap-10">
            <li>Web Development</li>
            <li>Social Interaction</li>
            <li>Music</li>
            <li>Reading</li>
            <li>Travelling</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Resume;
