import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactsView.vue'
import NormativeView from '../views/NormativeView.vue'

import { useAuthStore } from '@/stores/auth'

import NotFoundView from '../views/NotFoundView.vue'
import AreaRiservata from '@/views/AreaRiservata.vue'
import AmministratoreAreaRiservata from '../views/AmministratoreAreaRiservata.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contatti',
      component: ContactView,
    },
    {
      path: '/normative',
      name: 'normative',
      component: NormativeView,
    },
    {
      path: '/areaRisevata',
      name: 'area-riservata',
      component: AreaRiservata,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/AmministratoreAreaRiservata',
      name: 'amministratore-area-riservata',
      component: AmministratoreAreaRiservata,
      meta: {
        requiresAuth: true,
        requiresAdmin: true,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  // Ensure the auth state is initialized before checking
  if (!auth.token) {
    auth.initializeAuth()
  }

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return next({ name: 'home' })
  }

  if (to.meta.requiresAdmin && !auth.isAdmin) {
    return next({ name: 'home' })
  }

  next()
})

export default router
