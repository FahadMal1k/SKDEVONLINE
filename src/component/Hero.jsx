import React from "react";
import HeroImg from "../Images/frontendlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faXTwitter } from "@fortawesome/free-brands-svg-icons";


const HeroSection = () => {
  return (
    <section id="hero" className="py-20 px-4">
    <div className="bg-white text-black py-20 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap">
        <div className="max-w-xl w-full">
          <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg mb-8 text-center lg:text-left">
            I am a front-end developer passionate about creating awesome web
            experiences.
          </p>
          <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-orange-700 hover:border-orange-500 border-b-4 rounded w-full lg:w-auto">
            Download Resume
          </button>
          <div className="flex mt-4 space-x-4 items-center justify-center lg:justify-start">
          <p className="text-sm">Let's connect! </p>
            <a href="https://github.com/FahadMal1k" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-800 hover:text-gray-600" />
            </a>
            <a href="https://www.linkedin.com/in/fahad-pervez-278332270/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-gray-800 hover:text-blue-800" />
            </a>
            <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} size="2x" className="text-gray-700 hover:text-black" />
              
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 w-full lg:w-1/3 text-center lg:text-right mt-8 lg:mt-0">
          <img
            src={HeroImg}
            alt="Portfolio Image"
            className="h-58 w-58 mx-auto lg:mx-0"
          />
        </div>
      </div>
    </div>
    </section>

  );
};

export default HeroSection;