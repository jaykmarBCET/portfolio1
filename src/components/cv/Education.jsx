import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      institution: "Bengal College of Engineering and Technology",
      duration: "06/2022 - 06/2026",
    },
    {
      degree: "Intermediate",
      institution: "Rajkiya Sah Integer College Dindayalpur Siwan Bihar",
      duration: "02/2021 - 02/2022",
    },
    {
      degree:"Matrix",
      institution:"High School Dindayalpur , Siwan",
      duration:"02/2019 - 02/2020"
    }
  ];

  return (
    <div className="p-6 w-full mx-auto  bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">
        Education
      </h2>

      <div className="mt-6 space-y-6">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-700">{item.degree}</h3>
            <p className="text-gray-600 mt-1">{item.institution}</p>
            <p className="text-sm text-gray-500">{item.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
