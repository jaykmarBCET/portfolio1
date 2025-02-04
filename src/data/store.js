import { create } from 'zustand';
import axios from 'axios';

// Set up the axios instance with the base URL
const instanceAxios = axios.create({
  baseURL: "http://localhost:3000/api/grab"
});

const useStore = create((set) => ({
  backend: [],
  frontend: [],
  skills: [],
  project: [],
  programing: [],

  // Fetch Backend data
  getBackend: async () => {
    try {
      const response = await instanceAxios.get('/backend');
      set({ backend: response.data.data });
    } catch (error) {
      console.error("Error fetching backend data:", error);
      // Optional: Set an error state or show a message to the user
    }
  },

  // Fetch Frontend data
  getFrontend: async () => {
    try {
      const response = await instanceAxios.get('/frontend');
      set({ frontend: response.data.data });
    } catch (error) {
      console.error("Error fetching frontend data:", error);
      // Optional: Set an error state or show a message to the user
    }
  },

  // Fetch Programming data
  getPrograming: async () => {
    try {
      const response = await instanceAxios.get('/programing');
      set({ programing: response.data.data });
    } catch (error) {
      console.error("Error fetching programming data:", error);
      // Optional: Set an error state or show a message to the user
    }
  },

  // Fetch Project data
  getProject: async () => {
    try {
      const response = await instanceAxios.get('/project');
      set({ project: response.data.data });
    } catch (error) {
      console.error("Error fetching project data:", error);
      // Optional: Set an error state or show a message to the user
    }
  },

  // Fetch Skills data
  getSkill: async () => {
    try {
      const response = await instanceAxios.get('/skill');
      set({ skills: response.data.data });
    } catch (error) {
      console.error("Error fetching skills data:", error);
      // Optional: Set an error state or show a message to the user
    }
  }
}));

export { useStore}
