import { motion } from "framer-motion";

const MyStory = () => {
  return (
    <div className="container">
      {/* header  */}
      <div className="text-4xl font-bold py-5 text-center md:text-start">
        <p>
          My Story<span className="text-purple-700">.</span>
        </p>
      </div>

      {/* story details */}
      <motion.div
        className="space-y-4 text-gray-800 text-lg"
        initial={{ x: 100, opacity: 0 }} // Start off-screen (right)
        animate={{ x: 0, opacity: 1 }} // Slide to normal position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      >
        <p>
          My journey into as a{" "}
          <span className="text-purple-700">front-end developer</span> started
          back in 2022. I started my journey as a student programmer developing
          custom websites with just css and Javascript
        </p>

        <p>
          I proceeded to learning{" "}
          <span className="text-purple-700">react.js</span> which gave me the
          oppurtunity to start putting in for freelance jobs
        </p>
        <p>
          After some months of working for a{" "}
          <span className="text-purple-700">photography brand</span>. I decided
          to transition to <span className="text-purple-700">Treesoft</span>{" "}
          which has helped me to really do what i love as a front-end developer
        </p>

        <p>
          All these oppurtunities to work has helped me gain more experince in
          this field in which I am still looking forward to learning more. And
          you know what? I love what i do!
        </p>
      </motion.div>
    </div>
  );
};

export default MyStory;
