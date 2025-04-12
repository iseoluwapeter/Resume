// import React from "react";
import { motion } from "framer-motion";

import Footer from "../Footer/Footer";
import projectsDetails from "../Projects/projects";
import ProjectsCard from "../Projects/ProjectsCard";

const Projects = () => {
  return (
    <div className="container py-5">
      {/* header  */}
      <div className="text-4xl font-bold py-5 text-center md:text-start">
        <p>
          Projects<span className="text-purple-700">.</span>
        </p>
      </div>

      {/* project cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-9"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {projectsDetails.slice(5).map((item) => (
          <ProjectsCard key={item.id} {...item} />
        ))}
      </motion.div>

      {/* footer  */}

      <div className="container ">
        {/* get in touch */}
        <div className="flex flex-col justify-center items-center ">
          <div className="py-10 space-y-4">
            <p className="font-bold text-lg text-gray-600">
              Interested in working with us{" "}
              <span className="text-purple-700 ">?</span>
            </p>

            {/* CTA buttons  */}
            <div className="flex justify-center  ">
              <a
                href="mailto:peteroluwa2019@gmail.com"
                aria-label="mymail"
                rel="noopener"
                target="_blank"
                className="bg-purple-700 rounded-lg p-2 text-white flex justify-center items-center px-3"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* copyright */}

          <div className="text-gray-600 border-t-2 border-gray-300 py-2 flex pb-3 ">
            <p className="text-center text-sm md:text-[15px] pb-2">
              2025 All Right Reserved. Made by Peter Oyerinde
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
