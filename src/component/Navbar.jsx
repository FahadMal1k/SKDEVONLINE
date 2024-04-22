import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white top-0 fixed w-full shadow-md">
      <nav className="bg-gray-800 p-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="/" className="text-white font-bold text-xl">
              Portfolio
            </a>
          </div>
          <ul className="hidden md:flex flex-grow justify-center">
            <li>
              <ScrollLink
                activeClass="active"
                to="about"
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white mx-4 hover:text-orange-600 cursor-pointer"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="projects"
                smooth="true"
                offset={-70}
                duration={500}
                className="text-white mx-4 hover:text-orange-600 cursor-pointer"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="skills"
                smooth="true"
                offset={-70}
                duration={500}
                className="text-white mx-4 hover:text-orange-600 cursor-pointer"
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="hero"
                smooth="true"
                offset={-70}
                duration={500}
                className="text-white mx-4 hover:text-orange-600 cursor-pointer"
              >
                Resume
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="active"
                to="contact"
                smooth="true"
                offset={-70}
                duration={500}
                className="text-white mx-4 hover:text-orange-600 cursor-pointer"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
          <div>
          <a href="#contact">
            <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded">
              Hire me!
            </button>
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-white">
              {isOpen ? "≣" : "≡"}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col items-center">
              <li>
                <ScrollLink
                  activeClass="active"
                  to="about"
                  smooth="true"
                  offset={-70}
                  duration={500}
                  className="text-white my-2 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="projects"
                  smooth="true"
                  offset={-70}
                  duration={500}
                  className="text-white my-2 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="skills"
                  smooth="true"
                  offset={-70}
                  duration={500}
                  className="text-white my-2 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Skills
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="hero"
                  smooth="true"
                  offset={-70}
                  duration={500}
                  className="text-white my-2 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Resume
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  to="contact"
                  smooth="true"
                  offset={-70}
                  duration={500}
                  className="text-white my-2 cursor-pointer"
                  onClick={toggleNavbar}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
