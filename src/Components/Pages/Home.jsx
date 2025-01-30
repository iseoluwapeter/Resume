// import React from "react";
import Hero from "../Hero/Hero";
// import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import MyStory from "../MyStory/MyStory";
import Footer from "../Footer/Footer";
import FooterNav from "../Footer/FooterNav";
import MoreProjects from "../Projects/MoreProjects";

const Home = () => {
  return (
    <div>
      <Hero />
      <MoreProjects />
      <Experience />
      <Skills />
      <MyStory />
      <FooterNav />
      <Footer />
    </div>
  );
};

export default Home;
