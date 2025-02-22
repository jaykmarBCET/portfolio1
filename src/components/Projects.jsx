import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { cardAnimation } from "../animation/HomeAnime";
import projects from '../data/projectData';

function Projects() {
  const [toggle, setToggle] = useState({});

  useGSAP(() => {
    cardAnimation();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 pb-10 rounded-lg">
      <h1 className="text-4xl text-white font-sans font-extrabold text-center pt-32 tracking-wide uppercase">
        Projects (WEB DEVELOPMENT)
      </h1>
      <div className="flex flex-wrap gap-8 justify-center px-4 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card bg-white bg-opacity-10 border border-gray-600 rounded-lg shadow-lg p-6 max-w-sm hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative">
              <h1 className="mb-4 text-lg font-sans font-semibold bg-opacity-50 bg-gray-300 py-2 px-4 rounded-lg shadow-lg text-center">
                {project.title}
              </h1>
              <p className="text-sm font-sans font-medium mb-4 p-4 bg-gray-700 bg-opacity-60 rounded-lg text-gray-300 shadow-md">
                {project.description}
              </p>
              
              <div className="flex gap-2 overflow-x-hidden overflow-y-hidden">
                {project.image.map((item, imgIndex) => (
                  <img
                    key={imgIndex}
                    onMouseEnter={() =>
                      setToggle((prev) => ({
                        ...prev,
                        [`${index}-${imgIndex}`]: true
                      }))
                    }
                    onMouseLeave={() =>
                      setToggle((prev) => ({
                        ...prev,
                        [`${index}-${imgIndex}`]: false
                      }))
                    }
                    className={`h-28 w-40 rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300 ${
                      toggle[`${index}-${imgIndex}`] ? "animate-pulse" : ""
                    }`}
                    src={item}
                    alt={`Project ${index} - Image ${imgIndex}`}
                  />
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
      <h1 className="text-4xl text-white font-sans font-extrabold text-center pt-32 tracking-wide uppercase">
        Projects (ANDROID)
      </h1>
      <div className="flex flex-wrap gap-8 justify-center px-4 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card bg-white bg-opacity-10 border border-gray-600 rounded-lg shadow-lg p-6 max-w-sm hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative">
              <h1 className="mb-4 text-lg font-sans font-semibold bg-opacity-50 bg-gray-300 py-2 px-4 rounded-lg shadow-lg text-center">
                {project.title}
              </h1>
              <p className="text-sm font-sans font-medium mb-4 p-4 bg-gray-700 bg-opacity-60 rounded-lg text-gray-300 shadow-md">
                {project.description}
              </p>
              
              <div className="flex gap-2 overflow-x-hidden overflow-y-hidden">
                {project.image.map((item, imgIndex) => (
                  <img
                    key={imgIndex}
                    onMouseEnter={() =>
                      setToggle((prev) => ({
                        ...prev,
                        [`${index}-${imgIndex}`]: true
                      }))
                    }
                    onMouseLeave={() =>
                      setToggle((prev) => ({
                        ...prev,
                        [`${index}-${imgIndex}`]: false
                      }))
                    }
                    className={`h-28 w-40 rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300 ${
                      toggle[`${index}-${imgIndex}`] ? "animate-pulse" : ""
                    }`}
                    src={item}
                    alt={`Project ${index} - Image ${imgIndex}`}
                  />
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
