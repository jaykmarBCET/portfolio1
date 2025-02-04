import React from 'react';
import { usePortFolioStore } from '../store/PortfolioStore';

function SkillsDelete() {
  const { deleteSkills, skills } = usePortFolioStore();
  return (
    <div className="p-4 space-y-4">
      {skills.map((item) => (
        <div key={item._id} className="border p-4 rounded-lg shadow-md bg-white">
          <h1 className="text-lg font-bold mb-2">{item.title}</h1>
          <div className="flex items-center gap-4">
            <img src={item.image} alt="Skill" className="w-16 h-16 object-cover rounded-full" />
            <p className="text-gray-600">{item.description}</p>
          </div>
          <button 
            onClick={() => deleteSkills(item._id)} 
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default SkillsDelete;