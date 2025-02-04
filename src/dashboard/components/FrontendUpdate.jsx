import React, { useState } from 'react';
import { usePortFolioStore } from "../store/PortfolioStore";

function FrontendUpdate() {
  const { updateFronted, frontend } = usePortFolioStore();
  const [selectedFrontend, setSelectedFrontend] = useState(null);
  const [technology, setTechnology] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSelectChange = (e) => {
    const frontendItem = frontend.find(f => f._id === e.target.value);
    setSelectedFrontend(frontendItem);
    if (frontendItem) {
      setTechnology(frontendItem.technology);
      setDescription(frontendItem.description);
      setImage(frontendItem.image);
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
    if (!selectedFrontend) return;
    await updateFronted({ id: selectedFrontend._id, technology, description, image });
    setSelectedFrontend(null);
    setTechnology('');
    setDescription('');
    setImage('');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Update Frontend Technology</h2>

      {/* Select dropdown for selecting a frontend project */}
      <select
        onChange={handleSelectChange}
        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out mb-6"
      >
        <option value="">Select a project</option>
        {frontend.map(f => (
          <option key={f._id} value={f._id}>
            {f.technology}
          </option>
        ))}
      </select>

      {selectedFrontend && (
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

export default FrontendUpdate;
