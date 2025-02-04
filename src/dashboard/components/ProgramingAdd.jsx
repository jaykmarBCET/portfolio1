import React, { useState } from 'react';
import { usePortFolioStore } from '../store/PortfolioStore';

function ProgramingAdd() {
    const { addPrograming } = usePortFolioStore();
    const [language, setLanguage] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addPrograming({ language, start, end });
        setLanguage('');
        setStart('');
        setEnd('');
    };

    return (
        <div className="p-4 border rounded-lg shadow-md w-96">
            <h2 className="text-lg font-semibold mb-2">Add Programming Language</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
                <input 
                    type="text" 
                    placeholder="Language" 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value)} 
                    className="w-full p-2 border rounded" 
                    required
                />
                <input 
                    type="date" 
                    value={start} 
                    onChange={(e) => setStart(e.target.value)} 
                    className="w-full p-2 border rounded" 
                    required
                />
                <input 
                    type="date" 
                    value={end} 
                    onChange={(e) => setEnd(e.target.value)} 
                    className="w-full p-2 border rounded" 
                    required
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add Programming Language</button>
            </form>
        </div>
    );
}

export default ProgramingAdd;
