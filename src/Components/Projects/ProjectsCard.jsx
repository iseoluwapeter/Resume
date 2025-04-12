import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ProjectsCard = ({ title, img, description, link }) => {
  return (
    <div className="space-y-2">
      <div className="border border-purple-300 rounded-lg p-5 flex justify-center items-center gap-4 hover:!scale-105 hover:shadow-xl duration-200 cursor-pointer">
        <img src={img} alt={title} />
      </div>

      <div>
        <div className="flex items-center font-semibold text-lg">
          {title}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={link}
            className="text-xl text-purple-7oo font-bold ml-2"
          >
            <FiArrowUpRight />
          </a>
        </div>

        <p className="text-md font-medium text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
