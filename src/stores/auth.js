import { defineStore } from 'pinia'

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
    isClient: (state) => state.user.role === 'client',
    isAdmin: (state) => state.user.role === 'admin',
  },

  actions: {
    // Call this method after a successful login.
    login(userData, token) {
      this.user = userData
      this.token = token
      localStorage.setItem('authToken', token)
      localStorage.setItem('authUser', JSON.stringify(userData))
    },

    // Log out the user.
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

    // Check if access to a particular page is allowed.
    // For reserved clients page.
    canAccessClientPage() {
      return this.isAuthenticated && (this.isClient || this.isAdmin)
    },

    // For admin only page.
    canAccessAdminPage() {
      return this.isAuthenticated && this.isAdmin
    },
  },
})
