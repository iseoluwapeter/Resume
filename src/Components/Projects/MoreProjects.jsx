import { motion } from "framer-motion";
import projectsDetails from "./projects";
import ProjectsCard from "./ProjectsCard";
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
          {projectsDetails.slice(0, 4).map((item) => (
            <ProjectsCard key={item.id} {...item} />
          ))}
        </motion.div>
      </div>

      {/* <button className="border border-gray-400 flex rounded px-3 py-2 text-gray-500 mx-auto hover:text-white hover:bg-purple-700">
        <Link to="/project">View more projects</Link>
      </button> */}
    </div>
  );
};

export default MoreProjects;
