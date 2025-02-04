import React from 'react';

const Experience = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">
        Experience
      </h2>

      <div className="mt-6 space-y-6">
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Senior Software Engineer</h3>
          <p className="text-gray-600 mt-1">Google | 03/2019 - Present | Mountain View, CA</p>
          <ul className="list-disc pl-6 text-gray-600 mt-3 space-y-2">
            <li>
              Led a 5-person team on a machine learning project to improve search speed, achieving a 23% increase in search relevance.
            </li>
            <li>
              Improved deployment workflows for mobile services, decreasing update times by 35%.
            </li>
          </ul>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-700">Software Engineer II</h3>
          <p className="text-gray-600 mt-1">Microsoft | 08/2016 - 02/2019 | Redmond, WA</p>
          <ul className="list-disc pl-6 text-gray-600 mt-3 space-y-2">
            <li>
              Implemented a new application feature adopted by 80% of users within the first 3 months.
            </li>
            <li>
              Optimized database queries in Azure SQL, improving performance by 25%.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
