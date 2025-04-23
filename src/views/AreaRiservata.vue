<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/UseAuth'
import { useAnnouncementsStore } from '@/stores/AnnouncementsStore'

const router = useRouter()
const authStore = useAuthStore()
const announcementsStore = useAnnouncementsStore()

const addAnnouncement = () => {
  console.log('Admin is adding an announcement...')
  // Implement functionality to add announcements
}

const logout = () => {
  authStore.logout()
  router.push('/login') // Redirect to the login page after logout
}

onMounted(() => {
  if (!authStore.isAuthenticated) {
    router.push('/login') // Redirect to login if not authenticated
  }

  // Fetch announcements (placeholder for Firebase integration)
  announcementsStore.fetchAnnouncements()
})
</script>

<template>
  <main class="p-6 bg-gray-100 min-h-screen">
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-extrabold text-gray-800">Area Riservata</h1>
        <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700" @click="logout">
          Logout
        </button>
      </div>

      <!-- Admin-Only Section -->
      <section v-if="authStore.isAdmin" class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Admin Actions</h2>
        <button
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          @click="addAnnouncement"
        >
          Add Announcement
        </button>
      </section>

      <!-- Announcements Section -->
      <section class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">Ultimi annunci:</h2>
        <ul class="divide-y divide-gray-200 bg-amber-50 roundend-large shadow-md p-4">
          <li
            v-for="announcement in announcementsStore.announcements"
            :key="announcement.id"
            class="py-4"
          >
            <h3 class="text-lg font-bold text-gray-800">{{ announcement.title }}</h3>
            <p class="text-sm text-gray-500">{{ announcement.date }}</p>
            <p class="mt-2 text-gray-700">{{ announcement.content }}</p>
          </li>
        </ul>
      </section>

      <section class="bg-white p-6 rounded-lg shadow-lg mt-5">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">I miei contratti:</h2>
        <ul class="divide-y divide-gray-200 bg-amber-50 roundend-large shadow-md p-4"></ul>
      </section>
    </div>
  </main>
</template>
