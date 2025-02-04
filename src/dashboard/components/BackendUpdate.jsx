import React, { useState } from 'react';
import { usePortFolioStore } from '../store/PortfolioStore';

function BackendUpdate() {
  const { updateBackend, backend } = usePortFolioStore();
  const [selectedBackend, setSelectedBackend] = useState(null);
  const [technology, setTechnology] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSelectChange = (e) => {
    const backendItem = backend.find(b => b._id === e.target.value);
    setSelectedBackend(backendItem);
    if (backendItem) {
      setTechnology(backendItem.technology);
      setDescription(backendItem.description);
      setImage(backendItem.image);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Convert image to base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedBackend) return;
    await updateBackend({ id: selectedBackend._id, technology, description, image });
    setSelectedBackend(null);
    setTechnology('');
    setDescription('');
    setImage('');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Update Backend Project</h2>

      {/* Select dropdown for selecting a backend project */}
      <select
        onChange={handleSelectChange}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out mb-6"
      >
        <option value="">Select a project</option>
        {backend.map(b => (
          <option key={b._id} value={b._id}>
            {b.technology}
          </option>
        ))}
      </select>

      {selectedBackend && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="technology" className="block text-sm font-medium text-gray-700">Technology</label>
            <input
              type="text"
              value={technology}
              onChange={(e) => setTechnology(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              required
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
          >
            Update Project
          </button>
        </form>
      )}
    </div>
  );
}

export default BackendUpdate;
