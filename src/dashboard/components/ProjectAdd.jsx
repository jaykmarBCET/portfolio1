import React, { useState } from 'react';
import { usePortFolioStore } from '../store/PortfolioStore';

function ProjectAdd() {
    const { addProject } = usePortFolioStore();
    const [formData, setFormData] = useState({ 
        technology: "", 
        description: "", 
        image: "", 
        start: "", 
        end: "", 
        link: "" 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProject(formData);
        setFormData({ technology: "", description: "", image: "", start: "", end: "", link: "" });
    };

    return (
        <div className="p-4 border rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add Project</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input type="text" name="technology" placeholder="Technology" value={formData.technology} onChange={handleChange} className="p-2 border rounded" required />
                <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="p-2 border rounded" required></textarea>
                <input type="file" accept="image/*" onChange={handleImageChange} className="p-2 border rounded" required />
                <input type="date" name="start" value={formData.start} onChange={handleChange} className="p-2 border rounded" required />
                <input type="date" name="end" value={formData.end} onChange={handleChange} className="p-2 border rounded" required />
                <input type="url" name="link" placeholder="Project Link" value={formData.link} onChange={handleChange} className="p-2 border rounded" required />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">Add Project</button>
            </form>
        </div>
    );
}

export default ProjectAdd;
