import React from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
// import About from "./Components/Pages/About";
// import Project from "./Components/Pages/Project";
// import Contact from './Components/Pages/Contact'
const LazyProject= React.lazy(() => import('./Components/Projects/Projects'))

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="project" element={<LazyProject />} />
        {/* <Route path='contact' element={<Contact/>}/> */}
      </Routes>
    </div>
  );
};

export default App;
