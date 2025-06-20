import React from "react";
import { Routes, Route } from "react-router-dom";

const Projects = React.lazy(() => import("./Components/Pages/Projects"));
const Home = React.lazy(() => import("./Components/Pages/Home"));

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/project" element={<Projects />} /> */}
      </Routes>
    </div>
  );
};

export default App;
