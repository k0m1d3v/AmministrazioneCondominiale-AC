<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isMenuOpen = ref(false)
const router = useRouter()

const navigate = (routeName) => {
  isMenuOpen.value = false
  router.push({ name: routeName })
}
</script>

<template>
  <nav class="bg-teal-600 text-white shadow-lg">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-bold cursor-pointer" @click="navigate('home')">Condominio</div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6">
        <li>
          <button @click="navigate('home')" class="hover:text-teal-300 transition-colors">
            Home
          </button>
        </li>
        <li>
          <button @click="navigate('contatti')" class="hover:text-teal-300 transition-colors">
            Contatti
          </button>
        </li>
        <li>
          <button @click="navigate('area-riservata')" class="hover:text-teal-300 transition-colors">
            Area Riservata
          </button>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button class="md:hidden focus:outline-none" @click="isMenuOpen = !isMenuOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-teal-700 text-white py-4 space-y-4">
      <button @click="navigate('home')" class="block w-full text-left px-4 py-2 hover:bg-teal-500">
        Home
      </button>
      <button
        @click="navigate('contatti')"
        class="block w-full text-left px-4 py-2 hover:bg-teal-500"
      >
        Contatti
      </button>
      <button
        @click="navigate('normative')"
        class="block w-full text-left px-4 py-2 hover:bg-teal-500"
      >
        Normative
      </button>
      <button
        @click="navigate('area-riservata')"
        class="block w-full text-left px-4 py-2 hover:bg-teal-500"
      >
        Area Riservata
      </button>
    </div>
  </nav>
</template>
