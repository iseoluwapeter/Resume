// import React from "react";
import ProjectImg1 from "../../assets/Screenshot 2024-11-28 132259.png";
import ProjectImg2 from "../../assets/plant website.png";
import ProjectImg3 from "../../assets/sapphire estate.png";
import ProjectImg4 from "../../assets/spotify.png";
import { FiArrowUpRight } from "react-icons/fi";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
        {/* project1 */}
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
              Apex-Tutors is can online school that provides educational
              resources and tutoring to students
            </p>
          </div>
        </div>

        {/* project2 */}

        <div className="space-y-2">
          <div className=" border border-purple-300 rounded-lg p-7 flex justify-center items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer">
            <div>
              <img src={ProjectImg2} alt="" />
            </div>
          </div>
          <div>
            <p className="flex items-center font-semibold text-lg">
              IndorePlants.
              <a
                rel="noopener"
                target="_blank"
                href="https://dynamic-cheesecake-700772.netlify.app/"
                className="text-xl text-purple-700 font-bold"
              >
                <FiArrowUpRight />
              </a>
            </p>
            <p className="text-md font-medium text-gray-500 ">
              IndorePlants is an online website that showcases and gives
              education on plants, thier usefulness and benefits to human
              consumption.
            </p>
          </div>
        </div>

        {/* project3 */}

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
              Sapphire Estate is a real estate agency aimed at imporving the
              housing industry of the country. They are working to make sure
              thousands house owners before year 2026
            </p>
          </div>
        </div>

        {/* project4 */}
        <div className="space-y-2">
          <div className=" border border-purple-300 rounded-lg p-5 flex justify-center items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer">
            <div>
              <img src={ProjectImg4} alt="" className="p-1" />
            </div>
          </div>
          <div>
            <p className="flex items-center font-semibold text-lg">
              Music Player App
              <a
                rel="noopener"
                target="_blank"
                href="https://music-player-fawn-rho.vercel.app/"
                className="text-xl text-purple-700 font-bold"
              >
                <FiArrowUpRight />
              </a>
            </p>
            <p className="text-md font-medium text-gray-500 ">
              Velot Mechanical Factory is a enginnering firm that works to
              several mechanical solutions through applications of mechanical
              machines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
