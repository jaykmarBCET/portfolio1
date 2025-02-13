import { create } from 'zustand';
import axios from 'axios';

const useAuthStore = create((set, get) => ({
  user: null,
  base: "https://qw83ym-3000.csb.app",
  error: null,  // Store error message

  // Create account
  createAccount: async (email, password, message, isOwner) => {
    try {
      const response = await axios.post(`${get().base}/api/user/create-user`, {
        email, password, message, isOwner
      });
      set({ user: response.data.data, error: null });  // Clear error if successful
    } catch (error) {
      console.error("Error creating account:", error);
      set({ error: "Error creating account" });  // Store error message
    }
  },

  // Login account
  loginAccount: async (email, password) => {
    try {
      const response = await axios.post(`${get().base}/api/user/login-user`, 
        { email, password },
        { withCredentials: true }  // Enable cookies for session handling
      );
      console.log(response);
      
      // Set cookie with token from response
      document.cookie = `token=${response.data.data.token}; path=/; expires=${new Date(new Date().getTime() + 3600 * 1000).toUTCString()}; Secure; SameSite=Strict`;

      set({ user: response.data.data, error: null });  // Clear error if successful
    } catch (error) {
      console.error("Error logging in:", error);
      set({ error: "Error logging in" });  // Store error message
    }
  },

  // Logout account
  logoutAccount: async () => {
    try {
      await axios.get(`${get().base}/api/user/logout-user`, { withCredentials: true });
      
      // Remove token cookie upon logout
      document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Strict";

      set({ user: null, error: null });  // Clear user and error on logout
    } catch (error) {
      console.error("Error logging out:", error);
      set({ error: "Error logging out" });  // Store error message
    }
  },

  // Fetch current user
  currentAccount: async () => {
    try {
      const response = await axios.get(`${get().base}/api/user/current-user`, {
        withCredentials: true,  // Send cookies with request
      });
      set({ user: response.data.data, error: null });  // Clear error if successful
    } catch (error) {
      console.error("Error fetching current user:", error);
      set({ error: "Error fetching current user" });  // Store error message
    }
  },
}));

export { useAuthStore };
