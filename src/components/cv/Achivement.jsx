import React from 'react';

const Achievements = () => {
  return (
    <div className="p-6 w-full mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">
        Achievements
      </h2>
      <ul className="list-disc pl-6 text-gray-600 mt-4 space-y-2">
        <li>
          <span className="font-semibold text-gray-700">Leet code:</span> Solve more then 150 plus problem on leetcode.
        </li>
        <li>
          <span className="font-semibold text-gray-700">Geeks for Geeks:</span> Solve more then 280 problem in GFG
        </li>
        <li>
          <span className="font-semibold text-gray-700">Hacker Rank:</span> Solve more then 80 problem in Hacker rank
        </li>
        <li>
          <span className="font-semibold text-gray-700">SQL Basic :</span> <a href="https://www.hackerrank.com/profile/jaykumar2dear">SQL</a>
        </li>
      </ul>
    </div>
  );
};

export default Achievements;
