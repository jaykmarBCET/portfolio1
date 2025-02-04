import React, { useState } from 'react';
import { usePortFolioStore } from '../store/PortfolioStore';

function BackendAdd() {
    const { addBackend } = usePortFolioStore();
    const [technology, setTechnology] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImage(reader.result);
            };
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addBackend({ technology, description, image });
        setTechnology('');
        setDescription('');
        setImage(null);
    };

    return (
        <div className="p-4 border rounded-lg shadow-md w-96">
            <h2 className="text-lg font-semibold mb-2">Add Backend Technology</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
                <input 
                    type="text" 
                    placeholder="Technology" 
                    value={technology} 
                    onChange={(e) => setTechnology(e.target.value)} 
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
                    onChange={handleImageChange} 
                    className="w-full p-2 border rounded" 
                    required
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add Backend Technology</button>
            </form>
        </div>
    );
}

export default BackendAdd;