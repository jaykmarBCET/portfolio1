import React, { useState } from 'react';
import { usePortFolioStore } from '../store/PortfolioStore';

function SkillsAdd() {
    const { addSkills } = usePortFolioStore();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addSkills({ title, description, image });
        setTitle('');
        setDescription('');
        setImage('');
    };

    return (
        <div className="p-4 border rounded-lg shadow-md w-96">
            <h2 className="text-lg font-semibold mb-2">Add Skill</h2>
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
                <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleImageChange} 
                    className="w-full p-2 border rounded" 
                    required
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add Skill</button>
            </form>
        </div>
    );
}

export default SkillsAdd;