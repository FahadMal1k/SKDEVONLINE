import React from "react";
import AboutImg from "../Images/fahad.png"

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl font-bold mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-8">
            <p className="text-lg mb-4 text-wblack">
              Hi, I'm <span className="font-bold text-2xl text-orange-400">Fahad Pervez</span>, a passionate front-end developer with a
              focus on creating user-friendly and aesthetically pleasing web
              experiences.
            </p>
            <p className="text-lg text-black">
              I have experience with modern web technologies such as Html, CSS, TailwindCSS, JavaScript, React, and I'm always eager to learn new things and
              stay updated with the latest trends in web development.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={AboutImg}
              alt="About Me"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
