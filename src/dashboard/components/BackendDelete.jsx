import { usePortFolioStore } from "../store/PortfolioStore";

function BackendDelete() {
    const { deleteBackend, backend } = usePortFolioStore();

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-lg font-semibold mb-2">Delete Backend Technology</h2>
            {backend.map((tech) => (
                <div key={tech._id} className="border p-4 rounded-lg shadow-md bg-white flex justify-between items-center">
                    <div>
                        <h3 className="text-md font-bold">{tech.technology}</h3>
                        <p className="text-gray-600">{tech.description}</p>
                    </div>
                    <button 
                        onClick={() => deleteBackend(tech._id)} 
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default BackendDelete