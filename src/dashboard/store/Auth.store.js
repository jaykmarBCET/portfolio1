import { create } from 'zustand';
import axios from 'axios';
import Cookies from 'js-cookie';
import { BACKEND_URL } from '../../connections/Backend';

// Helper function to set cookies securely
const setCookies = (jwt) => {
  Cookies.set('jwt', jwt, { expires: 1, secure: true, sameSite: 'Strict' });
};

const useAuthStore = create((set, get) => ({
  user: null,
  base: BACKEND_URL,
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
      set({ error: error.response?.data?.message || "Error creating account" });  // More detailed error message
    }
  },

  // Login account
  loginAccount: async (email, password) => {
    try {
      const response = await axios.post(`${get().base}/api/user/login-user`, {
        email, password
      }, { withCredentials: true });

      const jwt = response.data.data.token;
      setCookies(jwt);  // Set the JWT token in cookies

      // Set the user in the store
      set({ user: response.data.data, error: null });
    } catch (error) {
      console.error("Error logging in:", error);
      set({ error: error.response?.data?.message || "Error logging in" });  // More detailed error message
    }
  },

  // Logout account
  logoutAccount: async () => {
    try {
      await axios.get(`${get().base}/api/user/logout-user`, { withCredentials: true });

      // Remove JWT token cookie upon logout
      Cookies.remove('jwt', { path: '/' });

      // Clear user data
      set({ user: null, error: null });
    } catch (error) {
      console.error("Error logging out:", error);
      set({ error: error.response?.data?.message || "Error logging out" });  // More detailed error message
    }
  },

  // Fetch current user
  currentAccount: async () => {
    try {
      let jwt = Cookies.get('jwt');  // Get the JWT token from cookies

      if (!jwt) {
        console.error("JWT token not found.");
        set({ error: "JWT token not found" });
        return;
      }

      const response = await axios.get(`${get().base}/api/user/current-user`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${jwt}`  // Use the Authorization header with the JWT
        }
      });

      set({ user: response.data.data, error: null });
    } catch (error) {
      console.error("Error fetching current user:", error);
      set({ error: error.response?.data?.message || "Error fetching current user" });
    }
  },
}));

export { useAuthStore };
