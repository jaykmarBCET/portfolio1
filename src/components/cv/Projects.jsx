import React from 'react';
import ProjectAnroid from '../../data/androidProject'
import projectData from '../../data/projectData'
const Projects = () => {
  

  return (
    <div className="p-8 w-full mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">
        Projects
      </h2>
      <div className="mt-6 space-y-6">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-700">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <a href={project.link}>Link</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
