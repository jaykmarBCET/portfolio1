import React, { useState } from 'react';
import { usePortFolioStore } from '../store/PortfolioStore';

function SkillsUpdate() {
    const { updateSkills, skills } = usePortFolioStore();
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSelectChange = (e) => {
        const skill = skills.find(s => s._id === e.target.value);
        setSelectedSkill(skill);
        if (skill) {
            setTitle(skill.title);
            setDescription(skill.description);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedSkill) return;
        await updateSkills({id:selectedSkill._id,  title, description} );
        setSelectedSkill(null);
        setTitle('');
        setDescription('');
    };

    return (
        <div className="p-4 border rounded-lg shadow-md w-96">
            <h2 className="text-lg font-semibold mb-2">Update Skill</h2>
            <select 
                onChange={handleSelectChange} 
                className="w-full p-2 border rounded mb-2">
                <option value="">Select a skill</option>
                {skills.map(skill => (
                    <option key={skill._id} value={skill._id}>{skill.title}</option>
                ))}
            </select>
            {selectedSkill && (
                <form onSubmit={handleSubmit} className="space-y-2">
                    <input 
                        type="text" 
                        placeholder="Title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="w-full p-2 border rounded" 
                        required
                    />
                    <textarea 
                        placeholder="Description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        className="w-full p-2 border rounded" 
                        required
                    />
                    <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Update Skill</button>
                </form>
            )}
        </div>
    );
}

export default SkillsUpdate;
