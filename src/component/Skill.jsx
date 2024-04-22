import React from 'react';
import htmlLogo from '../Images/html.png'; // Import HTML logo
import cssLogo from '../Images/css.png'; // Import CSS logo
import jsLogo from '../Images/js.png'; // Import JavaScript logo
import reactLogo from '../Images/react.png'; // Import React logo

const Skills = () => {
  return (
    <section id='skills' className='py-20 px-4'>
    <div className="container mx-auto mt-8">
      <h2 className="text-6xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-200 p-4 rounded-md shadow-md flex items-center justify-center hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-800">
          <img src={htmlLogo} alt="HTML Logo" className="w-16 h-16" />
          <div>
            <h3 className="text-lg font-semibold mb-2">HTML</h3>
            <p>Proficient in writing semantic HTML markup.</p>
          </div>
        </div>
        <div className="bg-gray-200 p-4 rounded-md shadow-md flex items-center justify-center hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-800">
          <img src={cssLogo} alt="CSS Logo" className="w-16 h-16" />
          <div>
            <h3 className="text-lg font-semibold mb-2">CSS and Tailwind CSS</h3>
            <p>Strong skills in CSS for styling web pages. Familiar with Tailwind CSS utility classes.</p>
          </div>
        </div>
        <div className="bg-gray-200 p-4 rounded-md shadow-md flex items-center justify-center hover:bg-yellow-500 hover:shadow-2xl hover:shadow-yellow-800">
          <img src={jsLogo} alt="JavaScript Logo" className="w-16 h-16" />
          <div>
            <h3 className="text-lg font-semibold mb-2">JavaScript</h3>
            <p>Proficient in JavaScript programming language, including ES6+ features.</p>
          </div>
        </div>
        <div className="bg-gray-200 p-4 rounded-md shadow-md flex items-center justify-center hover:bg-sky-500 hover:shadow-2xl hover:shadow-sky-800">
          <img src={reactLogo} alt="React Logo" className="w-16 h-16" />
          <div>
            <h3 className="text-lg font-semibold mb-2">React</h3>
            <p>Experience in building interactive web applications using React library.</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Skills;

