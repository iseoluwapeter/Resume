// import React from "react";
import Projects from "../Projects/Projects";
// import { NavLink } from "react-router-dom";
import ProjectPageImg from "../../assets/pexels-markusspiske-4439901.jpg";

const Project = () => {
  return (
    <div>
      <div className="opacity-75">
        <img src={ProjectPageImg} alt="" className="rounded-lg p-3 " />
      </div>
      <Projects />
      <div className="container ">
        {/* get in touch */}
        <div className="flex flex-col justify-center items-center  ">
          <div className="py-10 space-y-4">
            <p className="font-bold text-lg text-gray-600">
              Interested in working with us{" "}
              <span className="text-purple-700 ">?</span>
            </p>

            {/* CTA buttons  */}
            <div className="flex justify-center gap-3 ">
              <a
                href="mailto:peteroluwa2019@gmail.com"
                aria-label="mymail"
                rel="noopener"
                target="_blank"
                className="bg-purple-700 rounded-lg p-2 text-white flex justify-centeritems-center px-3"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* copyright */}

          <div className="text-gray-600 border-t-2 border-gray-300">
            <p>2024 All Right Reserved. Made by Peter Oyerinde</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
