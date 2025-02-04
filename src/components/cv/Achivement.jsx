import React from 'react';

const Achievements = () => {
  return (
    <div className="p-6 w-full mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">
        Achievements
      </h2>
      <ul className="list-disc pl-6 text-gray-600 mt-4 space-y-2">
        <li>
          <span className="font-semibold text-gray-700">Optimization Expert Award:</span> Recognized for outstanding performance in optimizing workflows.
        </li>
        <li>
          <span className="font-semibold text-gray-700">Published Machine Learning Article:</span> Authored a peer-reviewed article on cutting-edge machine learning techniques.
        </li>
        <li>
          <span className="font-semibold text-gray-700">Spearheaded Security Initiative:</span> Led a company-wide project to enhance data security standards.
        </li>
        <li>
          <span className="font-semibold text-gray-700">Cost-Saving Cloud Integration:</span> Reduced operational costs by implementing efficient cloud integration solutions.
        </li>
      </ul>
    </div>
  );
};

export default Achievements;
