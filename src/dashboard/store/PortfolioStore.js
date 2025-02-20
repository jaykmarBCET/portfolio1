import { create } from 'zustand';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Cookies from 'js-cookie';
import { BACKEND_URL } from '../../connections/Backend';

const instanceAxios = axios.create({
    baseURL: `${BACKEND_URL}/api`,
    withCredentials: true,
});

// Helper function to get JWT from cookies
const getJwtToken = () => {
    return Cookies.get('jwt');
};

const usePortFolioStore = create((set, get) => ({
    skills: [],
    backend: [],
    frontend: [],
    programing: [],
    projects: [],
    
    // Helper function to handle the Authorization header with JWT token
    getAuthHeaders: () => {
        const token = getJwtToken();
        if (token) {
            return { Authorization: `Bearer ${token}` };
        }
        return {}; // Return empty headers if no token exists
    },

    // Get skills
    getSkills: async () => {
        try {
            const response = await instanceAxios.get("/improve/skills/skills", {
                headers: get().getAuthHeaders()
            });
            if (!response.data) {
                console.log("Something went wrong while fetching skills");
                return;
            }
            set({ skills: response.data.data });
        } catch (error) {
            console.log(error);
        }
    },

    // Get backend
    getBackends: async () => {
        try {
            const response = await instanceAxios.get("/improve/backend/backend", {
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) {
                console.log("Something went wrong while fetching backend data");
                return;
            }
            set({ backend: response.data.data });
        } catch (error) {
            console.log(error);
        }
    },

    // Get frontend
    getFrontend: async () => {
        try {
            const response = await instanceAxios.get("/improve/frontend/frontend", {
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) {
                console.log("Something went wrong while fetching frontend data");
                return;
            }
            set({ frontend: response.data.data });
        } catch (error) {
            console.log(error);
        }
    },

    // Get projects
    getProject: async () => {
        try {
            const response = await instanceAxios.get("/improve/project/project", {
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) {
                console.log("Something went wrong while fetching project data");
                return;
            }
            set({ projects: response.data.data });
        } catch (error) {
            console.log(error);
        }
    },

    // Get programming
    getPrograming: async () => {
        try {
            const response = await instanceAxios.get("/improve/programing/programing", {
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) {
                console.log("Something went wrong while fetching programming data");
                return;
            }
            set({ programing: response.data.data });
        } catch (error) {
            console.log(error);
        }
    },

    // Add skills
    addSkills: async (data) => {
        try {
            const response = await instanceAxios.post("/improve/skills/skills", data, {
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) {
                console.log("Something went wrong while adding skills");
                return;
            }
            const skills = get().skills;
            set({ skills: [...skills, response.data.data] });
            toast.success("Skills added");
        } catch (error) {
            toast.error("Skills add failed");
            console.log(error);
        }
    },

    // Add backend
    addBackend: async ({ technology, description, image }) => {
        try {
            const response = await instanceAxios.post("/improve/backend/backend", { technology, description, image }, {
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) {
                console.log("Something went wrong while adding backend data");
                return;
            }
            const backend = get().backend;
            set({ backend: [...backend, response.data.data] });
            toast.success("Backend added");
        } catch (error) {
            toast.error("Backend add failed");
            console.log(error);
        }
    },

    // Add project
    addProject: async ({ technology, description, image, start, end, link }) => {
        try {
            const response = await instanceAxios.post("/improve/project/project", { technology, description, image, start, end, link }, {
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) {
                console.log("Something went wrong while adding project data");
                return;
            }
            const project = get().projects;
            set({ projects: [...project, response.data.data] });
            toast.success("Project added");
        } catch (error) {
            toast.error("Project add failed");
            console.log(error);
        }
    },

    // Add programming
    addPrograming: async ({ language, start, end }) => {
        try {
            const response = await instanceAxios.post("/improve/programing/programing", { language, start, end }, {
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) {
                console.log("Something went wrong while adding programming data");
                return;
            }
            const programing = get().programing;
            set({ programing: [...programing, response.data.data] });
            toast.success("Programming added");
        } catch (error) {
            toast.error("Programming add failed");
            console.log(error);
        }
    },

    // Add frontend
    addFrontend: async ({ technology, description, image }) => {
        try {
            const response = await instanceAxios.post("/improve/frontend/frontend", { technology, description, image }, {
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) {
                console.log("Something went wrong while adding frontend data");
                return;
            }
            const frontend = get().frontend;
            set({ frontend: [...frontend, response.data.data] });
            toast.success("Frontend added");
        } catch (error) {
            toast.error("Frontend add failed");
            console.log(error);
        }
    },

    // Update project
    updateProject: async ({ id, technology, description, start, end, link }) => {
        try {
            const response = await instanceAxios.patch("/improve/project/project", { id, description, technology, start, end, link }, {
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) return;
            let project = get().projects;
            project = project.filter((item) => response.data.data._id !== item._id);
            set({ projects: [...project, response.data.data] });
            toast.success("Project updated successfully");
        } catch (error) {
            toast.error("Project update failed");
            console.log(error);
        }
    },

    // Update skills
    updateSkills: async ({ id, title, description }) => {
        try {
            const response = await instanceAxios.patch("/improve/skills/skills", { id, title, description }, {
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) return;
            let skills = get().skills;
            skills = skills.filter((item) => item._id !== response.data.data._id);
            set({ skills: [...skills, response.data.data] });
            toast.success("Skill updated successfully");
        } catch (error) {
            toast.error("Skill update failed");
            console.log(error);
        }
    },

    // Update backend
    updateBackend: async ({ id, technology, description, image }) => {
        try {
            const response = await instanceAxios.patch("/improve/backend/backend", { id, technology, description, image }, {
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) return;
            let backend = get().backend;
            backend = backend.filter((item) => item._id !== response.data.data._id);
            set({ backend: [...backend, response.data.data] });
        } catch (error) {
            console.log(error);
        }
    },

    // Update frontend
    updateFronted: async ({ id, technology, description, image }) => {
        try {
            const response = await instanceAxios.patch("/improve/frontend/frontend", { technology, description, image }, {
                params: { id },
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) return;
            let frontend = get().frontend;
            frontend = frontend.filter((item) => item._id !== response.data.data._id);
            set({ frontend: [...frontend, response.data.data] });
            toast.success("Frontend updated successfully");
        } catch (error) {
            toast.error("Frontend update failed");
            console.log(error);
        }
    },

    // Update programming
    updatePrograming: async ({ id, language, start, end }) => {
        try {
            const response = await instanceAxios.patch("/improve/programing/programing", { language, start, end }, {
                params: { id },
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) return;
            let programing = get().programing;
            programing = programing.filter((item) => item._id !== response.data.data._id);
            set({ programing: [...programing, response.data.data] });
            toast.success("Programming updated successfully");
        } catch (error) {
            toast.error("Programming update failed");
            console.log(error);
        }
    },

    // Delete skills
    deleteSkills: async (id) => {
        try {
            const response = await instanceAxios.delete("/improve/skills/skills", {
                params: { id },
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) return;
            let skills = get().skills;
            skills = skills.filter((item) => item._id !== response.data.data._id);
            set({ skills: skills });
            toast.success("Skill deleted successfully");
        } catch (error) {
            toast.error("Skill delete failed");
            console.log(error);
        }
    },

    // Delete project
    deleteProject: async (id) => {
        try {
            const response = await instanceAxios.delete("/improve/project/project", {
                params: { id },
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) return;
            let project = get().projects;
            project = project.filter((item) => item._id !== response.data.data._id);
            set({ projects: project });
            toast.success("Project deleted successfully");
        } catch (error) {
            toast.error("Project delete failed");
            console.log(error);
        }
    },

    // Delete programming
    deletePrograming: async (id) => {
        try {
            const response = await instanceAxios.delete("/improve/programing/programing", {
                params: { id },
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) return;
            let programing = get().programing;
            programing = programing.filter((item) => item._id !== response.data.data._id);
            set({ programing: programing });
            toast.success("Programming deleted successfully");
        } catch (error) {
            toast.error("Programming delete failed");
            console.log(error);
        }
    },

    // Delete frontend
    deleteFronted: async (id) => {
        try {
            const response = await instanceAxios.delete("/improve/frontend/frontend", {
                params: { id },
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) return;
            let frontend = get().frontend;
            frontend = frontend.filter((item) => item._id !== response.data.data._id);
            set({ frontend: frontend });
            toast.success("Frontend deleted successfully");
        } catch (error) {
            toast.error("Frontend delete failed");
            console.log(error);
        }
    },

    // Delete backend
    deleteBackend: async (id) => {
        try {
            const response = await instanceAxios.delete("/improve/backend/backend", {
                params: { id },
                headers: get().getAuthHeaders()
            });
            if (!response.data.data) return;
            let backend = get().backend;
            backend = backend.filter((item) => item._id !== response.data.data._id);
            set({ backend: backend });
            toast.success("Backend deleted successfully");
        } catch (error) {
            toast.error("Backend delete failed");
            console.log(error);
        }
    },
}));

export { usePortFolioStore };
