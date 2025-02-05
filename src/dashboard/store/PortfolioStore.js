import { create } from 'zustand';
import axios from 'axios';
import {toast} from 'react-hot-toast'

const instanceAxios = axios.create({
    baseURL: "https://9c2nf9-3000.csb.app/api",
    withCredentials: true
});

const usePortFolioStore = create((set, get) => ({
    skills: [],
    backend: [],
    frontend: [],
    programing: [],
    projects: [],
    getSkills: async () => {
        try {
            const response = await instanceAxios.get("/improve/skills/skills");
            if (!response.data) {
                console.log("Something went wrong while fetching skills");
                return;
            }
            set({ skills: response.data.data });
        } catch (error) {
            console.log(error);
        }
    },
    getBackends: async () => {
        try {
            const response = await instanceAxios.get("/improve/backend/backend");
            if (!response.data.data) {
                console.log("Something went wrong while fetching backend data");
                return;
            }
            set({ backend: response.data.data });
        } catch (error) {
            console.log(error);
        }
    },
    getFrontend: async () => {
        try {
            const response = await instanceAxios.get("/improve/frontend/frontend");
            if (!response.data.data) {
                console.log("Something went wrong while fetching frontend data");
                return;
            }
            set({ frontend: response.data.data });
        } catch (error) {
            console.log(error);
        }
    },
    getProject: async () => {
        try {
            const response = await instanceAxios.get("/improve/project/project");
            if (!response.data.data) {
                console.log("Something went wrong while fetching project data");
                return;
            }
            set({ projects: response.data.data });
        } catch (error) {
            console.log(error);
        }
    },
    getPrograming: async () => {
        try {
            const response = await instanceAxios.get("/improve/programing/programing");
            if (!response.data.data) {
                console.log("Something went wrong while fetching programming data");
                return;
            }
            set({ programing: response.data.data });
        } catch (error) {
            console.log(error);
        }
    },
    getFeedBack: async () => {
        try {
            const response = await instanceAxios.get("/feedback");
            if (!response.data.data) {
                console.log("Something went wrong while fetching feedback data");
                return;
            }
            set({ feedbacks: response.data.data });
        } catch (error) {
            console.log(error);
        }
    },
    addSkills: async (data) => {
        console.log(data);
        try {
            const response = await instanceAxios.post("/improve/skills/skills",data);
            if (!response.data.data) {
                console.log("Something went wrong while adding skills");
                return;
            }

            const skills = get().skills;
            set({ skills: [...skills, response.data.data] });
            toast.success("Skills added")
        } catch (error) {
            toast.error(" project add failed")
            console.log(error);
        }
    },
    addBackend: async ({technology, description, image}) => {
        try {
            const response = await instanceAxios.post("/improve/backend/backend", { technology, description, image });
            if (!response.data.data) {
                console.log("Something went wrong while adding backend data");
                return;
            }
            const backend = get().backend;
            set({ backend: [...backend, response.data.data] });
            toast.success("Backend added")
        } catch (error) {
            toast.error("backend add failed")
            console.log(error);
        }
    },
    addProject: async ({ technology, description, image, start, end, link }) => {
        try {
            const response = await instanceAxios.post("/improve/project/project", { technology, description, image, start, end, link });
            if (!response.data.data) {
                console.log("Something went wrong while adding project data");
                return;
            }
            const project = get().projects;
            set({ projects: [...project, response.data.data] });
            toast.success("project added")
        } catch (error) {
            toast.error("project add failed")
            console.log(error);
        }
    },
    addPrograming: async ({language, start, end}) => {
        try {
            const response = await instanceAxios.post("/improve/programing/programing", { language, start, end });
            if (!response.data.data) {
                console.log("Something went wrong while adding programming data");
                return;
            }
            const programing = get().programing;
            set({ programing: [...programing, response.data.data] });
            toast.success("Programinig added")
        } catch (error) {
            toast.error("programing add failed")
            console.log(error);
        }
    },
    addFrontend: async ({technology, description, image}) => {
        try {
            const response = await instanceAxios.post("/improve/frontend/frontend", { technology, description, image });
            if (!response.data.data) {
                console.log("Something went wrong while adding frontend data");
                return;
            }
            const frontend = get().frontend;
            set({ frontend: [...frontend, response.data.data] });
            toast.success("Fronted added")
        } catch (error) {
            toast.error("frontend add failed")
            console.log(error);
        }
    },
    updateProject: async ({ id, technology, description, start, end, link }) => {
        try {
            const response = await instanceAxios.patch("/improve/project/project", { id, description, technology, start, end, link });
            if (!response.data.data) return;
            let project = get().projects;
            project = project.filter((item) => response.data.data._id !== item._id);
            set({ projects: [...project, response.data.data] });
            toast.success("project updated successfully")
        } catch (error) {
            toast.error("project update failed")
            console.log(error);
        }
    },
    updateSkills: async ({id, title, description}) => {
        try {
            const response = await instanceAxios.patch("/improve/skills/skills", { id, title, description });
            if (!response.data.data) return;
            let skills = get().skills;
            skills = skills.filter((item) => item._id !== response.data.data._id);
            set({ skills: [...skills, response.data.data] });
            toast.success("Skill updated successfully")
        } catch (error) {
            toast.error("Skill update failed")
            console.log(error);
        }
    },
    updateBackend: async ({id, technology, description, image}) => {
        try {
            const response = await instanceAxios.patch("/improve/backend/backend", { id, technology, description, image });
            if (!response.data.data) return;
            let backend = get().backend;
            backend = backend.filter((item) => item._id !== response.data.data._id);
            set({ backend: [...backend, response.data.data] });
        } catch (error) {
            console.log(error);
        }
    },
    updateFronted: async ({id, technology, description, image}) => {
        try {
            const response = await instanceAxios.patch("/improve/frontend/frontend", { technology, description, image },{params:{id}});
            if (!response.data.data) return;
            let frontend = get().frontend;
            frontend = frontend.filter((item) => item._id !== response.data.data._id);
            set({ frontend: [...frontend, response.data.data] });
            toast.success("Fronted update successfully")
        } catch (error) {
            toast.error("fronted update failed")
            console.log(error);
        }
    },
    updatePrograming: async ({id, language, start, end}) => {
        console.log(id,language,start,end);
        try {
            const response = await instanceAxios.patch("/improve/programing/programing", { language, start, end },{params:{id}});
            if (!response.data.data) return;
            let programing = get().programing;
            programing = programing.filter((item) => item._id !== response.data.data._id);
            set({ programing: [...programing, response.data.data] });
            toast.success("Programing updated successfully")
        } catch (error) {
            toast.error("Programing updated failed")
            console.log(error);
        }
    },
    deleteSkills: async (id) => {
        try {
            const response = await instanceAxios.delete("/improve/skills/skills", { params: { id } });
            if (!response.data.data) return;
            let skills = get().skills;
            skills = skills.filter((item) => item._id !== response.data.data._id);
            set({ skills: skills });
            toast.success("SKill deleted successfully")
        } catch (error) {
            toast.error("Skill deleted failed")
            console.log(error);
        }
    },
    deleteProject: async (id) => {
        try {
            const response = await instanceAxios.delete("/improve/project/project", { params: { id } });
            if (!response.data.data) return;
            let project = get().projects;
            project = project.filter((item) => item._id !== response.data.data._id);
            set({ projects: project });
            toast.success("project deleted successfully")
        } catch (error) {
            toast.error("project deleted failed")
            console.log(error);
        }
    },
    deletePrograming: async (id) => {
        try {
            const response = await instanceAxios.delete("/improve/programing/programing", { params: { id } });
            if (!response.data.data) return;
            let programing = get().programing;
            programing = programing.filter((item) => item._id !== response.data.data._id);
            set({ programing: programing });
            toast.success("Programing deleted successfully")
        } catch (error) {
            toast.error("Programing deleted failed")
            console.log(error);
        }
    },
    deleteFronted: async (id) => {
        try {
            const response = await instanceAxios.delete("/improve/frontend/frontend", { params: { id } });
            if (!response.data.data) return;
            let frontend = get().frontend;
            frontend = frontend.filter((item) => item._id !== response.data.data._id);
            set({ frontend: frontend });
            toast.success("Fronted delete successfully")
        } catch (error) {
            toast.error("fronted deleted failed")
            console.log(error);
        }
    },
    deleteBackend: async (id) => {
        try {
            const response = await instanceAxios.delete("/improve/backend/backend", { params: { id } });
            if (!response.data.data) return;
            let backend = get().backend;
            backend = backend.filter((item) => item._id !== response.data.data._id);
            set({ backend: backend });
            toast.success("Backend deleted successfully")
        } catch (error) {
            toast.error("backend deleted failed")
            console.log(error);
        }
    },
}));

export { usePortFolioStore };