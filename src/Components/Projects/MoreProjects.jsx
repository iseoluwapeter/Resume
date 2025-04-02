import React from "react";
// import React from "react";
import { motion } from "framer-motion";
import ProjectImg1 from "../../assets/Screenshot 2024-11-28 132259.png";
import ProjectImg2 from "../../assets/Screenshot 2025-01-30 005900.png";
import ProjectImg3 from "../../assets/sapphire estate.png";
import ProjectImg4 from "../../assets/spotify.png";
import ProjectImg6 from "../../assets/anett.png";
// import ProjectImg5 from "../../assets/Screenshot 2025-01-30 005032.png";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const MoreProjects = () => {
  return (
    <div>
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
          {/* project1 */}
          <div className="space-y-2">
            <div className=" border border-purple-300 rounded-lg p-7 flex justify-center items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer">
              <div>
                <img src={ProjectImg6} alt="" />
              </div>
            </div>
            <div>
              <div className=" flex items-center font-semibold text-lg">
                Anettcom Technologies
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://anettcom.com/"
                  className="text-xl text-purple-700 font-bold"
                >
                  <FiArrowUpRight />
                </a>
              </div>
              <p className="text-md font-medium text-gray-500 ">
                Annetcom Technologies is software development company located in
                Osogbo, Osun State. This website showcases the company goals,
                aims and services.
              </p>
            </div>
          </div>

          {/* project2 */}
          <div className="space-y-2">
            <div className=" border border-purple-300 rounded-lg p-5 flex justify-center items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer">
              <div>
                <img src={ProjectImg1} alt="" />
              </div>
            </div>
            <div>
              <div className=" flex items-center font-semibold text-lg">
                Apex-Tutors
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://apex-school.vercel.app/"
                  className="text-xl text-purple-700 font-bold"
                >
                  <FiArrowUpRight />
                </a>
              </div>
              <p className="text-md font-medium text-gray-500 ">
                Apex-Tutors is an online school that provides educational
                resources and tutoring to students
              </p>
            </div>
          </div>

          {/* project3 */}
          <div className="space-y-2">
            <div className=" border border-purple-300 rounded-lg p-7 flex justify-center items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer">
              <div>
                <img src={ProjectImg2} alt="" />
              </div>
            </div>
            <div>
              <p className="flex items-center font-semibold text-lg">
                Meta Blog
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://meta-blog-ly.vercel.app/"
                  className="text-xl text-purple-700 font-bold"
                >
                  <FiArrowUpRight />
                </a>
              </p>
              <p className="text-md font-medium text-gray-500 ">
                Meta Blog is a private blog website that allows to showcase and
                publish blogs.
              </p>
            </div>
          </div>

          {/* project4 */}
          <div className="space-y-2">
            <div className=" border border-purple-300 rounded-lg p-5 flex justify-center items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer">
              <div>
                <img src={ProjectImg3} alt="" />
              </div>
            </div>
            <div>
              <p className="flex items-center font-semibold text-lg">
                Sapphire Estate
                <a href="" className="text-xl text-purple-700 font-bold">
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://my-sapphire-estate.vercel.app/"
                  >
                    <FiArrowUpRight />
                  </a>
                </a>
              </p>
              <p className="text-md font-medium text-gray-500 ">
                Sapphire Estate is a real estate agency aimed at improving the
                housing industry in Nigeria. They are working to make sure there
                are millions house owners before year 2026
              </p>
            </div>
          </div>
          {/* project4 */}
        </motion.div>
      </div>

      <button className="border border-gray-400 flex rounded px-3 py-2 text-gray-500 mx-auto hover:text-white hover:bg-purple-700">
        <Link to="/Project">View more projects</Link>
      </button>
    </div>
  );
};

export default MoreProjects;
