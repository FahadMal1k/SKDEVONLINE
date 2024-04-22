import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function ContactMe () {
  return (
    <div id="contact" className=" container mx-auto mt-8">
      <h2 className="text-6xl font-bold mb-8">Contact Me</h2>
      <div className="bg-gray-200 p-4 rounded-md shadow-md">
        <div className="flex justify-center">
          <p>Email: <span className="font-bold text-2xl hover:shadow-xl hover:shadow-orange-700   hover:text-orange-500">fahadpervez12@gmail.com</span></p>
        </div>
        {/* <div className="flex justify-center">
          <p>Phone No: <span className="font-bold text-2xl hover:shadow-xl hover:shadow-orange-700  hover:text-orange-500">03332023154</span></p>
        </div> */}
        </div>

        <div className="flex mt-4 space-x-4 items-center justify-center md:justify-center">
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
    
  );
};
