import React from 'react';
import Project from './Project';
import projectsData from './projects.json';
import GymPhoto from "../Images/Background.jpg";
import GymPhoto1 from "../Images/Background.jpg";
import GymPhoto2 from "../Images/Background.jpg";


const Projects = () => {
  return (
    <section id="projects" className='py-20 px-4'>
    <div  className="container mx-auto mt-8">
      <h2 className="text-6xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {projectsData.map((project) => (
            <Project
            key={project.id}
            project={{
              ...project,
              image: project.id === 1 ? GymPhoto :
                     project.id === 2 ? GymPhoto1 :
                     project.id === 3 ? GymPhoto2 :
                     null // Add default image or handle missing images
            }}
           />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Projects;
