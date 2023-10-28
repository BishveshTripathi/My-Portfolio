import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import data from "./data.json";

const projectProps = {
  reactprojects: data.reactprojects,
  jsprojects: data.jsprojects,
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects {...projectProps} />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
