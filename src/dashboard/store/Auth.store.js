import { create } from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
  user: null,

  createAccount: async (email, password, message, isOwner) => {
    try {
      const response = await axios.post("http://localhost:3000/api/user/create-user", {
        email, password, message, isOwner
      });
      set({ user: response.data.data });
    } catch (error) {
      console.error("Error creating account:", error);
    }
  },

  loginAccount: async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3000/api/user/login-user", { email, password },{withCredentials:true});
      console.log(response);
      set({ user: response.data.data });
    } catch (error) {
      console.error("Error logging in:", error);
    }
  },

  logoutAccount: async () => {
    try {
      await axios.get("http://localhost:3000/api/user/logout-user", { withCredentials: true });
      set({ user: null });
    } catch (error) {
      console.error("Error logging out:", error);
    }
  },

  currentAccount: async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/user/current-user", { withCredentials: true, });
      set({ user: response.data.data });
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  }
}));

export { useAuthStore };
