import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:shadow-2xl hover:shadow-black">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={project.image} alt={project.title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{project.category}</div>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{project.title}</a>
          <p className="mt-2 text-gray-500">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;

