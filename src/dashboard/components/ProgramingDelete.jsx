import React from 'react';
import { usePortFolioStore } from '../store/PortfolioStore';

function ProgramingDelete() {
    const { deletePrograming, programing } = usePortFolioStore();

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-lg font-semibold mb-2">Delete Programming Language</h2>
            {programing.map((item) => (
                <div key={item._id} className="border p-4 rounded-lg shadow-md bg-white flex justify-between items-center">
                    <div>
                        <h3 className="text-md font-bold">{item.language}</h3>
                        <p className="text-gray-600">Start: {item.start} | End: {item.end}</p>
                    </div>
                    <button 
                        onClick={() => deletePrograming(item._id)} 
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ProgramingDelete;