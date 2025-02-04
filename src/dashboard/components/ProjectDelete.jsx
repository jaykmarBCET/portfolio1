import React, { useEffect, useState } from 'react';
import { usePortFolioStore } from '../store/PortfolioStore';

function ProjectDelete() {
  const { deleteProject, projects } = usePortFolioStore();
  
  
  return (
    <div className="max-w-4xl mx-auto p-4">
      {projects.map((item, index) => (
        <div key={index} className="bg-gray-800 text-white rounded-lg shadow-lg p-4 mb-4 transition-transform transform hover:scale-105">
          <h1 className="text-xl font-bold mb-2">{item.technology}</h1>
          <div className="mb-2">
            <p className="text-gray-300">{item.description}</p>
          </div>
          <div className="mb-2 grid grid-cols-2 gap-2">
            {item.image.map((img) => (
              <div key={img} className="overflow-hidden rounded-lg">
                <img src={img} alt="projectImage" className="w-full h-32 object-cover" />
              </div>
            ))}
          </div>
          <div className="mb-2">
            <h3 className="text-gray-400">Start: {new Date(item.start).toLocaleDateString()}</h3>
            <h3 className="text-gray-400">End: {new Date(item.end).toLocaleDateString()}</h3>
          </div>
          <div className="mb-2">
            <p className="text-blue-400">{item.link}</p>
          </div>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
            onClick={() => deleteProject(item._id)
              
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProjectDelete;