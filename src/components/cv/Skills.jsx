import React from 'react';
import skills from '../../data/programingSkills';
const Skills = () => {
  
  return (
    <div className="p-6 h-full w-full mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">
        Skills
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="hover:text-gray-800 transition duration-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
