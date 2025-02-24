

const Achievements = () => {
  return (
    <div className="p-6 w-full mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2">
        Achievements
      </h2>
      <ul className="list-disc pl-6 text-gray-600 mt-4 space-y-2">
        <li>
          <span className="font-semibold text-gray-700">LeetCode:</span> Successfully solved over 150 coding problems, improving problem-solving skills and algorithmic thinking.
        </li>
        <li>
          <span className="font-semibold text-gray-700">GeeksforGeeks:</span> Completed more than 280 problems, gaining a deeper understanding of data structures and algorithms.
        </li>
        <li>
          <span className="font-semibold text-gray-700">HackerRank:</span> Solved over 80 problems, demonstrating proficiency in coding and analytical skills.
        </li>
        <li>
          <span className="font-semibold text-gray-700">SQL Basic Certification:</span> Completed the SQL certification on HackerRank, showcasing strong foundational knowledge in SQL. <a href="https://www.hackerrank.com/profile/jaykumar2dear" className="text-blue-500 hover:underline">View Profile</a>
        </li>
        <li>
          <span className="font-semibold text-gray-700">Java Basic Certification:</span> Completed the Java certification on HackerRank, showcasing strong foundational knowledge in Java. <a href="https://www.hackerrank.com/profile/jaykumar2dear" className="text-blue-500 hover:underline">View Profile</a>
        </li>
      </ul>
    </div>
  );
};

export default Achievements;
