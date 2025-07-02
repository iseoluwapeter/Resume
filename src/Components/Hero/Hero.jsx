import { motion } from "framer-motion";
import { SlideUp } from "../Utility/animation,jsx";
import HeroImg from "../../assets/IMG-20241114-WA0020.jpg";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5  relative">
        {/* Hero details  */}

        <div className="flex flex-col  text-center md:text-start md:py-7 space-y-4 ">
          <motion.p
            variants={SlideUp(1.0)}
            initial="hidden"
            whileInView={"visible"}
            className="text-lg text-gray-600 hover:text-purple-700 transition-all duration-300 lg:text-3xl pt-3"
          >
            Hey, I{"'"}m Peter
          </motion.p>
          <p className="text-6xl font-bold md:text-5xl lg:text-7xl md:gap-5 ">
            <span className="text-purple-700">Front</span>stack Developer
          </p>
          <p className="text-gray-600  lg:text-xl  ">
            I'm a Frontend Developer based in Nigeria. I build responsive,
            user-friendly websites and powerful backend systems to deliver
            complete, seamless web experiences.
          </p>

          {/* CTA buttons  */}
          <div className="flex justify-center md:justify-start gap-3 ">
            <a
              href="mailto:peteroluwa2019@gmail.com"
              aria-label="mymail"
              rel="noopener"
              target="_blank"
              className="bg-purple-700 rounded-lg p-2 text-white flex justify-center items-center px-3"
            >
              Get in touch
            </a>
            {/* <button className="border border-purple-700 rounded-lg p-2 px-3">
              <NavLink to="/Project">Browse Project</NavLink>
            </button> */}
          </div>
        </div>
        {/* Hero image  */}

        <div className="flex justify-center items-center md:justify-center md:items-start md:py-9 lg:max-w-100">
          <div className="border border-purple-700 w-80 h-80 lg:w-[400px] lg:h-[400px]  rounded-full flex flex-col justify-center items-center ">
            <img
              src={HeroImg}
              alt="hero_img"
              className="w-60 h-60 rounded-full lg:w-80 md:h-80 md:w-80 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
