import  { useState } from 'react';
import { usePortFolioStore } from '../store/PortfolioStore';

function ProjectUpdate() {
  const { projects, updateProject } = usePortFolioStore();
  const [formData, setFormData] = useState({
    id: "", technology: "", description: "", start: "", end: "", link: ""
  });

  const handleUpdate = async () => {
    await updateProject(formData);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Update Project Here</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((item) => (
          <div key={item._id} className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{item.technology}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {item.image.map((i) => (
                <img key={i} src={i} alt="project" className="w-full h-32 object-cover rounded-lg shadow-md" />
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <h3><span className="font-semibold">Start:</span> {item.start}</h3>
              <h3><span className="font-semibold">End:</span> {item.end}</h3>
            </div>
            <a href={item.link} className="block mt-4 text-center text-blue-600 font-semibold hover:underline">View Project</a>
            <button 
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              onClick={() => setFormData({ ...item, id: item._id })}>
              Update Project
            </button>
          </div>
        ))}
      </div>
      {formData.id && (
        <div className="mt-8 p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Edit Project</h2>
          <input type="text" className="w-full p-2 border rounded-lg mb-2" placeholder="Technology" value={formData.technology} onChange={(e) => setFormData({ ...formData, technology: e.target.value })} />
          <textarea className="w-full p-2 border rounded-lg mb-2" placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
          <input type="text" className="w-full p-2 border rounded-lg mb-2" placeholder="Start Date" value={formData.start} onChange={(e) => setFormData({ ...formData, start: e.target.value })} />
          <input type="text" className="w-full p-2 border rounded-lg mb-2" placeholder="End Date" value={formData.end} onChange={(e) => setFormData({ ...formData, end: e.target.value })} />
          <input type="text" className="w-full p-2 border rounded-lg mb-2" placeholder="Project Link" value={formData.link} onChange={(e) => setFormData({ ...formData, link: e.target.value })} />
          <button 
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
            onClick={handleUpdate}>
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectUpdate;
