<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-extrabold text-gray-800 mb-6">Admin Panel</h1>

    <div v-for="user in users" :key="user.id" class="mb-4 bg-white p-4 rounded-lg shadow-md">
      <p class="text-lg font-semibold text-gray-700">{{ user.name }} - {{ user.role }}</p>

      <!-- Button to promote user to admin -->
      <button
        v-if="user.role !== 'admin'"
        @click="promoteToAdmin(user.id)"
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-2"
      >
        Promote to Admin
      </button>
    </div>
  </div>
</template>

<script>
import { collection, getDocs } from 'firebase/firestore'
import { elevateToAdmin } from '../../firebase'
import { db } from '../../firebase'

export default {
  data() {
    return {
      users: [], // List of users (fetch from Firestore)
    }
  },
  async created() {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'))
      this.users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        role: doc.data().role || 'client', // Default to 'client' if no role is found
        ...doc.data(),
      }))
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  },
  methods: {
    async promoteToAdmin(userId) {
      try {
        await elevateToAdmin(userId)

        // Update the users list to reflect the promotion
        const user = this.users.find((u) => u.id === userId)
        if (user) {
          user.role = 'admin' // Update the user's role locally
        }
      } catch (error) {
        console.error('Failed to promote user to admin:', error)
        alert('Failed to promote user to admin. Please try again.')
      }
    },
  },
}
</script>
