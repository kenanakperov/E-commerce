import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutText from "../components/AboutText";
import AboutBg from "../components/AboutBg";
import AboutHowItStart from "../components/AboutHowItStart";

const About = () => {
  return (
    <div>
      <Header />
      <AboutText />
      <AboutBg />
      <AboutHowItStart/>
      <Footer />
    </div>
  );
};

export default About;
