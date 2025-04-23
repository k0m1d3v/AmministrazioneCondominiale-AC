import { defineStore } from 'pinia'
import { db } from '../../firebase' // Ensure you import your Firebase database instance

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      id: null,
      role: null, // 'client' or 'admin'
    },
    token: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user.role === 'admin',
  },

  actions: {
    async login(userData, token) {
      this.user = userData
      this.token = token

      // Fetch the user role from Firebase to ensure it's accurate
      const userDoc = await db.collection('users').doc(userData.id).get()
      if (userDoc.exists) {
        this.user.role = userDoc.data().role || 'client' // Default to 'client' if no role is found
      } else {
        this.user.role = 'client' // Default to 'client' if user is not found in the database
      }

      localStorage.setItem('authToken', token)
      localStorage.setItem('authUser', JSON.stringify(userData))
    },

    logout() {
      this.user = { id: null, role: null }
      this.token = null
      localStorage.removeItem('authToken')
      localStorage.removeItem('authUser')
    },

    // Initialize authentication state from localStorage.
    initializeAuth() {
      const token = localStorage.getItem('authToken')
      const user = JSON.parse(localStorage.getItem('authUser'))
      if (token && user) {
        this.user = user
        this.token = token
      }
    },
  },
})
