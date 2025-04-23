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
    isAdmin: (state) => state.user.role === 'admin',
  },

  actions: {
    login(userData, token) {
      this.user = userData
      this.token = token
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
