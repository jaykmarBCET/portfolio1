import { usePortFolioStore } from "../store/PortfolioStore";

function FrontendDelete() {
    const { deleteFronted, frontend } = usePortFolioStore(); // Change to deleteFrontend and frontend

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-lg font-semibold mb-2">Delete Frontend Technology</h2>
            {frontend.map((tech) => (  // Change to frontend instead of backend
                <div key={tech._id} className="border p-4 rounded-lg shadow-md bg-white flex justify-between items-center">
                    <div>
                        <h3 className="text-md font-bold">{tech.technology}</h3>
                        <p className="text-gray-600">{tech.description}</p>
                    </div>
                    <button 
                        onClick={() => deleteFronted(tech._id)}  // Change to deleteFrontend
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default FrontendDelete;
