import React, { useState } from 'react';
import { usePortFolioStore } from '../store/PortfolioStore';

function ProgramingUpdate() {
  const { updatePrograming, programing } = usePortFolioStore();
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [language, setLanguage] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSelectChange = (e) => {
    const program = programing.find(p => p._id === e.target.value);
    setSelectedProgram(program);
    if (program) {
      setLanguage(program.language);
      setStart(program.start);
      setEnd(program.end);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedProgram) return;
    await updatePrograming({ id: selectedProgram._id, language, start, end });
    setSelectedProgram(null);
    setLanguage('');
    setStart('');
    setEnd('');
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Update Programming Language</h2>
      <select
        onChange={handleSelectChange}
        className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
      >
        <option value="">Select a language</option>
        {programing.map((program) => (
          <option key={program._id} value={program._id}>
            <div className="flex flex-col">
              <h3 className="font-semibold">{program.language}</h3>
              <div className="bg-gray-200 p-2 rounded-md mt-1">
                <p>Start: {program.start}</p>
                <p>End: {program.end}</p>
              </div>
            </div>
          </option>
        ))}
      </select>
      
      {selectedProgram && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            required
          />
          <div className="flex space-x-4">
            <input
              type="date"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              required
            />
            <input
              type="date"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200 ease-in-out"
          >
            Update
          </button>
        </form>
      )}
    </div>
  );
}

export default ProgramingUpdate;
