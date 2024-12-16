// import React from "react";
import AboutImg from "../../assets/IMG-20241114-WA0020.jpg";
import MyStory from "../MyStory/MyStory";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <div className="p-3">
        <img src={AboutImg} alt="" className="rounded-xl" />
      </div>
      <div>
        <MyStory />
        <Footer />
      </div>
    </>
  );
};

export default About;
