import React from "react";

const Footer = () => {
  return (
    <div className="flex gap-60 justify-center bg-slate-100 pt-12 h-40 w-full">
      <div>
        <h1 className="font-bold text-xl">Phone</h1>
        <h1>9695355165</h1>
      </div>
      <div>
        <h1 className="font-bold text-xl">Email</h1>
        <h1>rajtripathi54671@gmail.com</h1>
      </div>
      <div>
        <h1 className="font-bold text-xl">Follow me</h1>
        <div className="flex gap-4 pt-1">
          <a href="https://github.com/BishveshTripathi">
            <img
              src="github.svg"
              alt="error"
              className="footericoncolor  h-5 w-5 text-white"
            />
          </a>
          <a href="https://www.linkedin.com/in/bishvesh-tripathi-053226281/">
            <img
              src="linkedin.svg"
              alt="error"
              className="footericoncolor h-5 w-5"
            />
          </a>
          <a href="https://twitter.com/BishveshT">
            <img
              src="twitter.svg"
              alt="error"
              className="footericoncolor  h-5 w-5"
            />
          </a>
        </div>
      </div>
      <div>
        <h1 className="font-bold">2023 Bishvesh Triapthi</h1>
        <h1>Web Developer</h1>
      </div>
    </div>
  );
};

export default Footer;
