import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactsView.vue'
import NormativeView from '../views/NormativeView.vue'

import { useAuthStore } from '@/stores/UseAuth'

import NotFoundView from '../views/NotFoundView.vue'
import AreaRiservata from '@/views/AreaRiservata.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/contatti',
      name: 'contatti',
      component: ContactView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/servizi',
      name: 'servizi',
      component: NormativeView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        requiresAuth: false,
      },
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
