<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useAuthStore } from '@/stores/UseAuth'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()
const authStore = useAuthStore()

const login = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    const user = userCredential.user

    // Save user data and token in the Pinia store
    authStore.login(
      { id: user.uid, role: 'client' }, // Adjust role as needed
      await user.getIdToken(),
    )

    // Redirect to the reserved area
    router.push('/areaRisevata')
  } catch (error) {
    console.error(error)
    errorMessage.value = 'Invalid email or password. Please try again.'
  }
}
</script>

<template>
  <main class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
          <input
            id="email"
            type="email"
            v-model="email"
            required
            class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
          <input
            id="password"
            type="password"
            v-model="password"
            required
            class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <p v-if="errorMessage" class="text-sm text-red-500">{{ errorMessage }}</p>
        <button
          type="submit"
          class="w-full px-4 py-2 text-white bg-teal-600 rounded-large hover:bg-teal-700 focus:ring-4 focus:ring-teal-300"
        >
          Login
        </button>
      </form>
    </div>
  </main>
</template>
